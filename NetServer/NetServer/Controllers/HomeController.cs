using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Grid.Interfaces;
using Grid.Models;
using Microsoft.AspNetCore.Mvc;
using NetServer.Data;
using NetServer.Models;

namespace NetServer.Controllers
{
	public class HomeController : Controller
	{
		private readonly ApplicationDbContext _applicationDbContext;
		private readonly IGridService _gridService;

		public HomeController(ApplicationDbContext applicationDbContext,
						IGridService gridService)
		{
			_applicationDbContext = applicationDbContext;
			_gridService = gridService;
		}

		public IActionResult Index()
		{
			return View();
		}

		[HttpPost]
		public IActionResult GetSampleThingList(GridRequestModel query)
		{
			EntityPage<SampleThing> result = _gridService.Get(query, _applicationDbContext.SampleThings, p => p);

			return Json(result);
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}
	}
}
