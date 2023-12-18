namespace MobileHub.DTOs
{
    /// <summary>
    /// Clase para representar un commit en el sistema.
    /// </summary>
    public class CommitDto
    {
        /// <summary>
        /// Obtiene o establece el autor del commit.
        /// </summary>
        public string Author { get; set; } = null!;

        /// <summary>
        /// Obtiene o establece el mensaje del commit.
        /// </summary>
        public string Message { get; set; } = null!;

        /// <summary>
        /// Obtiene o establece la fecha del commit.
        /// </summary>
        public DateTimeOffset Date { get; set; }
    }
}