using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnetodev.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Text;
	
using System.Security.Cryptography;

namespace gymwebsite.Controllers
{

    public class HomeController : Controller
    {
        private readonly ProductsContext db;
        public HomeController(ProductsContext x)
        {
            this.db = x;
        }


        [HttpGet]
        public IActionResult Index()
        {
            
            return View();
        }
/*
        [HttpPost]
        public async Task<IActionResult> Index(Products k,String ReturnUr1)
        {
           var adm = db.EntityNames.FirstOrDefault(kul => kul.FirstName == k.FirstName && kul.LastName == MD5Sifrele(k.LastName));
           if(adm!=null)
           {
            var talepler = new List<Claim>()
            {
               new Claim(ClaimTypes.Name, k.FirstName.ToString())
            };
             ClaimsIdentity kimlik = new ClaimsIdentity(talepler,"login");
             ClaimsPrincipal kural = new ClaimsPrincipal(kimlik);
            await HttpContext.SignInAsync(kural);
            if(!String.IsNullOrEmpty(ReturnUr1))
            {
                return Redirect(ReturnUr1);
            }
            else
            {
                return RedirectToAction("Index","Home");
            }
            }
            return View();
            
        }
         public async Task<IActionResult> ÇikikYap()
         {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
             return RedirectToAction("Index","Home");
         }
         public static string MD5Sifrele(string sifrelenecekMetin) {
 
            // MD5CryptoServiceProvider sınıfının bir örneğini oluşturduk.
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            //Parametre olarak gelen veriyi byte dizisine dönüştürdük.
            byte[] dizi = Encoding.UTF8.GetBytes(sifrelenecekMetin);
            //dizinin hash'ini hesaplattık.
            dizi = md5.ComputeHash(dizi);
            //Hashlenmiş verileri depolamak için StringBuilder nesnesi oluşturduk.
            StringBuilder sb = new StringBuilder();
            //Her byte'i dizi içerisinden alarak string türüne dönüştürdük.
 
            foreach (byte ba in dizi) {
                sb.Append(ba.ToString("x2").ToLower());
            }
 
            //hexadecimal(onaltılık) stringi geri döndürdük.
            return sb.ToString(); }
 
    
 */
    }
   
}