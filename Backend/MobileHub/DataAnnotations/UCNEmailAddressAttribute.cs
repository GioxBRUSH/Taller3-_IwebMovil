using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using MobileHub.Common;

namespace MobileHub.DataAnnotations
{
    public class UCNEmailAddressAttribute : ValidationAttribute

    {

        public UCNEmailAddressAttribute()
        {
        }

        public UCNEmailAddressAttribute(Func<string> errorMessageAccessor) : base(errorMessageAccessor)
        {
        }

        public UCNEmailAddressAttribute(string errorMessage) : base(errorMessage)
        {
        }


        
/// <summary>
/// Método para validar si el valor proporcionado es un correo electrónico válido de UCN.
/// </summary>
/// <param name="value">El valor a validar.</param>
/// <returns>Verdadero si el valor es un correo electrónico válido de UCN, falso en caso contrario.</returns>
public override bool IsValid(object? value)
{
    // Si el valor no es una cadena, devuelve falso
    if(value is not string email) return false;

    // Verifica si el valor es un correo electrónico válido
    var isValidEmail = new EmailAddressAttribute().IsValid(value);
    if(!isValidEmail) return false;

    try
    {
        // Obtiene el dominio del correo electrónico
        var emailDomain = email.Split('@')[1];

        // Verifica si el dominio del correo electrónico coincide con el dominio de UCN
        return RegularExpressions.UCNEmailDomainRegex().IsMatch(emailDomain);
    }
    catch(Exception)
    {
        // Si ocurre alguna excepción (por ejemplo, si el correo electrónico no contiene '@'), devuelve falso
        return false; 
    }
}