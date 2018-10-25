using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LucianaOrganicos.Models
{
    public class ProductModel
    {
        [DisplayName("Código")]
        public int Id { get; set; }
        [DisplayName("Produto")]
        [Required(ErrorMessage ="Descrição é obrigatória!")]
        public string Product { get; set; }
        [DisplayName("Categoria")]
        public string Category { get; set; }
    }
}