using LucianaOrganicos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LucianaOrganicos.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            //var product = new ProductModel();
            //return View(product);
            ViewBag.Title = "Produtos";

            return View(new ProductModel());
        }

        [HttpPost]
        public ActionResult Save(ProductModel vmProductModel)
        {
            vmProductModel.Id = 9;

            return Json(new { Success = true , id = vmProductModel.Id, message = "Salvo com sucesso!"}, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public ActionResult GetAll()
        {
            var lstProductModel = new List<ProductModel>();
            lstProductModel.Add(new ProductModel() { Id = 1, Product = "Alface", Category = "Verdura" });
            lstProductModel.Add(new ProductModel() { Id = 2, Product = "Almeirão", Category = "Verdura" });
            lstProductModel.Add(new ProductModel() { Id = 3, Product = "Cenoura", Category = "Legume" });
            lstProductModel.Add(new ProductModel() { Id = 4, Product = "Beterraba", Category = "Legume" });
            lstProductModel.Add(new ProductModel() { Id = 5, Product = "Laranja", Category = "Fruta" });

            return Json(new { Success = true, Products = lstProductModel, message = "Dados Carregados!" }, JsonRequestBehavior.AllowGet);
        }
        //public ActionResult Post(string txtid, string txtproduct, string txtcategory)
    }
}