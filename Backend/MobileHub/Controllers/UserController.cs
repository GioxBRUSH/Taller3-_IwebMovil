// using System;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using MobileHub.Models;
// using MobileHub.Data;

// namespace MobileHub.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class UserController : ControllerBase
//     {
//         private readonly ApplicationDbContext _context;

//         public UserController(ApplicationDbContext context)
//         {
//             _context = context;
//         }

//         [HttpPost]
//         public async Task<ActionResult<User>> RegisterUser(User user)
//         {
//             _context.Users.Add(user);
//             await _context.SaveChangesAsync();

//             return CreatedAtAction("GetUser", new { id = user.Id }, user);
//         }

//         // This method is assumed to exist for the CreatedAtAction call in RegisterUser
//         [HttpGet("{id}")]
//         public async Task<ActionResult<User>> GetUser(int id)
//         {
//             var user = await _context.Users.FindAsync(id);

//             if (user == null)
//             {
//                 return NotFound();
//             }

//             return user;
//         }
//     }
// }