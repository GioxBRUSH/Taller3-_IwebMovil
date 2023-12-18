using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MobileHub.DTOs
{
    /// <summary>
    /// Clase para representar un usuario en el sistema.
    /// </summary>
    public class UserDto
    {
        /// <summary>
        /// Obtiene o establece el ID del usuario.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Obtiene o establece el nombre completo del usuario.
        /// </summary>
        public string Fullname { get; set; } = string.Empty;

        /// <summary>
        /// Obtiene o establece el RUT del usuario.
        /// </summary>
        public string Rut { get; set; } = string.Empty;

        /// <summary>
        /// Obtiene o establece el correo electrónico del usuario.
        /// </summary>
        public string Email { get; set; } = string.Empty;

        /// <summary>
        /// Obtiene o establece la contraseña del usuario.
        /// </summary>
        public string Password { get; set; } = string.Empty;

        /// <summary>
        /// Obtiene o establece el año de nacimiento del usuario.
        /// </summary>
        public int Birthday { get; set; }
    }
}