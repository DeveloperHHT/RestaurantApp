// ReservationsController.cs
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

[ApiController]
[Route("api/[controller]")]
public class ReservationsController : ControllerBase
{
    private readonly RestaurantDbContext _context;

    public ReservationsController(RestaurantDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetReservations([FromQuery] DateTime? date)
    {
        var reservations = _context.Reservations.AsQueryable();
        if (date.HasValue)
        {
            reservations = reservations.Where(r => r.Date.Date == date.Value.Date);
        }
        return Ok(await reservations.ToListAsync());
    }

    [HttpPost]
    public async Task<IActionResult> CreateReservation([FromBody] Reservation reservation)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        try
        {
            _context.Reservations.Add(reservation);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetReservations), new { id = reservation.Id }, reservation);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Internal Server Error", details = ex.Message });
        }
    }
}
