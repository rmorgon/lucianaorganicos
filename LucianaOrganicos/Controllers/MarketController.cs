using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LucianaOrganicos.Controllers
{
    public class MarketController : Controller
    {
        // GET: Market
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Prepare()
        {
            return View();
        }
    }
}