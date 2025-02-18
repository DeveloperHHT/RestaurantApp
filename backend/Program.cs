using backend.Data;
using backend.Repositories;
using backend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// ✅ Veritabanı bağlantısı ekleyelim
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=restaurant.db"));

// ✅ CORS ayarlarını ekleyelim
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

// ✅ Servisleri ekleyelim
builder.Services.AddScoped<ProductRepository>();
builder.Services.AddScoped<ProductService>();

// ✅ Controllerları ekleyelim
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = null; // JSON'daki büyük/küçük harf duyarlılığını kaldırır
});


var app = builder.Build();

// ✅ Middleware'leri ekleyelim
app.UseCors("AllowAll");
app.UseRouting();
app.UseAuthorization();
app.MapControllers();

app.Run();
