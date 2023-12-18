namespace MobileHub.DTOs
{
    /// <summary>
    /// Clase para representar un repositorio en el sistema.
    /// </summary>
    public class RepositoryDto
    {
        /// <summary>
        /// Obtiene o establece el nombre del repositorio.
        /// </summary>
        public string Name { get; set; } = null!;

        /// <summary>
        /// Obtiene o establece la fecha de creación del repositorio.
        /// </summary>
        public DateTimeOffset CreatedAt { get; set; } = DateTime.Now;

        /// <summary>
        /// Obtiene o establece la fecha de última actualización del repositorio.
        /// </summary>
        public DateTimeOffset UpdatedAt { get; set; } = DateTime.Now;

        /// <summary>
        /// Obtiene o establece la cantidad de commits en el repositorio.
        /// </summary>
        public int CommitsAmount { get; set; } 
    }
}