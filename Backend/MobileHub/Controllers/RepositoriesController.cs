using Microsoft.AspNetCore.Mvc;
using Octokit;
using DotNetEnv;

namespace MobileHub.Controllers
{

  [ApiController]
  [Route("[controller]")]

  public class RepositoriesController : ControllerBase
  {
    [HttpGet]
    public async Task<ActionResult<List<GitHubCommit>>> Get()
    {
      Env.Load();


      var client = new GitHubClient(new ProductHeaderValue("MobileHub"));
      var myToken= Env.GetString("GITHUB_ACCESS_TOKEN");
      var tokenCred = new Credentials(myToken);
      client.Credentials = tokenCred;

      // var repositories = (await client.Repository.GetAllForUser("Dizkm8")).ToList();
      // return repositories;

      var commits = (await client.Repository.Commit.GetAll("Dizkm8", "Hackathon")).ToList();
      return commits;
    }
  }
}