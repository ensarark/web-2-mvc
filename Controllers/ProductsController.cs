using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnetodev.Models;

namespace dotnetodev.Controllers
{

    public class ProductsController : Controller
    {
         private readonly ProductsContext veritabanim;

        public ProductsController(ProductsContext context) {
            this.veritabanim = context;
        }
        public IActionResult Index()
        {
            var urunler = veritabanim.EntityNames.ToList();
            return View(urunler);
        }
          public IActionResult Giris()
        {
            return View();
        }
           public IActionResult AnaSayfa()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View(urunler);
        }
             public IActionResult Bolumlermiz()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View();
        }
               public IActionResult Market()
        {
              var urunler = veritabanim.EntityNames.ToList();
            return View(urunler);
        }
                public IActionResult Market1()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View();
        }
                public IActionResult Market2()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View();
        }
                  public IActionResult Market3()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View();
        }
                  public IActionResult Market4()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View();
        }
                  public IActionResult Market5()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View();
        }
                  public IActionResult Market6()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View();
        }
                    public IActionResult koc1()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View();
        }
                      public IActionResult koc2()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View();
        }
                      public IActionResult koc3()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View();
        }
                      public IActionResult koc4()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View();
        }
                   public IActionResult Adminpanel()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View(urunler);
        }
     
    
        public IActionResult Kullanicihesap()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View(urunler);
        }
        [HttpGet]
        public IActionResult Uyeol()
        {
            veritabanim.SaveChanges();
            return View();
        }
          [HttpPost]
         public IActionResult Uyeol(Products urun)
        {
            veritabanim.EntityNames.Add(urun);
            veritabanim.SaveChanges();
            return RedirectToAction("Adminpanel");
        }
          public IActionResult SepetOnayla()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View();
        }
            public IActionResult Sepet()
        {
             var urunler = veritabanim.EntityNames.ToList();
            return View();
        }
       [HttpGet]
        public IActionResult Add()
        {
              veritabanim.SaveChanges();
            return View();
        }
        [HttpPost]
        public IActionResult Add(Products urun)
        {
            veritabanim.EntityNames.Add(urun);
            veritabanim.SaveChanges();
            return RedirectToAction("Adminpanel");
        }
    
        public IActionResult Remove(int Id)
        {
           var gelen = veritabanim.EntityNames.Find(Id);
           veritabanim.EntityNames.Remove(gelen);
           veritabanim.SaveChanges();
            return RedirectToAction("Adminpanel");
        }
           [HttpGet]
        public IActionResult Update(int id)
        {
            var gelenUrun=veritabanim.EntityNames.Find(id);
            return View(gelenUrun);
        }
         [HttpPost]
         public IActionResult Update(Products urun)
        {
            veritabanim.EntityNames.Update(urun);
            veritabanim.SaveChanges();
            return RedirectToAction("Adminpanel");
        }
    }
}