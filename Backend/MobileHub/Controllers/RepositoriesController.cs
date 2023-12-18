using Microsoft.AspNetCore.Mvc;
using Octokit;
using DotNetEnv;
using MobileHub.DTOs;

namespace MobileHub.Controllers
{

  [ApiController]
  [Route("[controller]")]

  public class RepositoriesController : ControllerBase
  {

    // [HttpGet("{repositoryName}")]

    // public async Task<ActionResult<IEnumerable<CommitDto>>> GetAllRepositoryCommits(string repositoryName)
    // {
    //   var client = new GitHubClient(new ProductHeaderValue("MobileHub"));
    //   var myToken= Env.GetString("GITHUB_ACCESS_TOKEN");
    //   var tokenCred = new Credentials(myToken);
    //   client.Credentials = tokenCred;

    //   var commits = await client.Repository.Commit.GetAll("Dizkm8", repositoryName);
    //   if (commits is null) return BadRequest("Repository not found");

    //   var mappedCommits = commits.Select(c => new CommitDto
    //   {
    //     Author = c.Commit.Author.Login,
    //     Message = c.Commit.Message,
    //     Date = c.Commit.Author.Date
    //   });

    //   return Ok(mappedCommits);
    // }



    [HttpGet]
    public async Task<ActionResult<IEnumerable<RepositoryDto>>> GetAll()
    {

      var client = new GitHubClient(new ProductHeaderValue("MobileHub"));
      var myToken= Env.GetString("GITHUB_ACCESS_TOKEN");
      var tokenCred = new Credentials(myToken);
      client.Credentials = tokenCred;

      var repositories = await client.Repository.GetAllForUser("Dizkm8");

      repositories = repositories.OrderByDescending(x => x.UpdatedAt).ToList();

      var getCommitsTasks = repositories.Select(r =>GetCommitsAmountByRepository(client, r.Name));

      var commitsResults = await Task.WhenAll(getCommitsTasks);

      var mappedRepositories = repositories.Select((r, index) =>
      {
         var entity = new RepositoryDto
         {
          Name = r.Name,
          CreatedAt = r.CreatedAt,
          UpdatedAt = r.UpdatedAt,
          CommitsAmount = commitsResults[index]
         };
         return entity;

      });

      return Ok(mappedRepositories);

     
    }

    private async Task<int> GetCommitsAmountByRepository(GitHubClient client, string repoName)
    {
      var commits = await client.Repository.Commit.GetAll("Dizkm8", repoName);
      if (commits is null) return 0;

      return commits.Count;
    }
  }
}