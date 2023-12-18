// using Microsoft.AspNetCore.Authorization;
// using Microsoft.AspNetCore.Mvc;
// using MobileHub.src.data;
// using MobileHub.src.dto.users;
// using MobileHub.src.models;
// using MobileHub.src.services.interfaces;


//  namespace MobileHub.Controllers
//   {
//     [ApiController]
//     [Route("api/[controller]")]
//      public class AuthController : ControllerBase
//      {
//          private readonly DataContext _context;
//          private readonly IConfiguration _configuration;    

//          // Inyectamos el contexto para poder acceder a la base de datos
//                 public AuthController(DataContext context, IConfiguration configuration)
//          {
//              // Guardamos en un atributo para utilizarlo cuando lo necesitemos
//              _context = context;
//              _configuration = configuration;
//          }

       
//          // La ruta es localhost:5267/api/auth/login
//          [HttpPost("login")]
//          public async Task<ActionResult<string>> Client(LoginUserDto loginUserDto)
//          {
//              // Buscar al administrador por username
//              var admin = await _context.Admins.FirstOrDefaultAsync(u => u.Username == loginUserDto.Username);

//              // Si el usuario es nulo es porque no existe, así que retornamos credenciales inválidas  -> Http 400 BadRequest
//              // NO RETORNAR que el correo es inválido, ya que expone a tus usuarios
//              if (admin is null) return BadRequest("Invalid Credentials");

//              // Comparamos la clave ingresada con la clave guardad en la base de datos
//              var result = BCrypt.Net.BCrypt.Verify(loginUserDto.Password, admin.Password);

//              // Si no coinciden entonces retornamos credenciales inválidas -> Http 400 BadRequest
//              if(!result) return BadRequest("Invalid Credentials");
            
//              var token = CreateToken(admin);
//              return token;
//          }

//          private string CreateToken(Admin admin)
//         {
//             var claims = new List<Claim>{
//                 new ("rutOrDni", admin.Username)
//             };


//             var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
//                     _configuration.GetSection("AppSettings:Token").Value!));

//             var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
//             var token = new JwtSecurityToken(
//                 claims: claims,
//                 expires: DateTime.Now.AddMinutes(5),
//                 signingCredentials: creds
//             );

//             var jwt = new JwtSecurityTokenHandler().WriteToken(token);
//             return jwt;
//         }
//     }
//  }