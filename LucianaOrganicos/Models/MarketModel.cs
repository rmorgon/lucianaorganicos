using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LucianaOrganicos.Models
{
    public class MarketModel
    {
        public MarketModel  ()
        {
            this.Products = new List<MarketProductModel>();
        }
        public  int Id { get; set; }
        public string Market { get; set; }
        public DateTime Date { get; set; }

        public List<MarketProductModel> Products { get; set; }
    }
}