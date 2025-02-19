using backend.Data;
using backend.Repositories;
using backend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// **📌 Veritabanı Bağlantısını Ekle**
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=restaurant.db"));

builder.Services.AddScoped<ProductRepository>();
builder.Services.AddScoped<ProductService>();

builder.Services.AddControllers();
var app = builder.Build();
app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseRouting();
app.UseAuthorization();
app.MapControllers();

app.Run();
