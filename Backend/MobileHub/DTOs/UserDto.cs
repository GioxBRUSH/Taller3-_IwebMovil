using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MobileHub.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Fullname { get; set; } = string.Empty;
        public string Rut { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public int Birthday { get; set; }
    }
}