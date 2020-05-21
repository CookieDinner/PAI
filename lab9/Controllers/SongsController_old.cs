using MVC.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace MVC.Controllers
{
    public class SongsController_old : Controller
    {

        // GET: Songs
        public ActionResult Index()
        {
            Song song = new Song();
            song.Id = 1;
            song.Name = "Utwór 1";
            song.Artist = "Wykonawca 1";
            song.GenreId = 1;
            return View(song);
        }

        public ActionResult Square(int? id)
        {
            if (id == null)
            {
                return Content("Brak parametru");
            }
            else
            {
                return Content((id * id).ToString());
            }
        }

    }
}