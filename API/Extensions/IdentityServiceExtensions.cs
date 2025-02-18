using System.Text;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Persistence;

namespace API.Extensions;

public static class IdentityServiceExtensions
{
     public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
     {
         services.AddIdentityCore<AppUser>(opt =>
             {
                 opt.Password.RequireNonAlphanumeric = false;
             })
             .AddEntityFrameworkStores<DataContext>();

         var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("#huwV1Cgdfg##}p{@1K48m9l8ylmlynlynl98ym%iulhljknkjhuhlhjhknbub;A6Deh|+G9asd`lkTl%QPIxHN)<BBsdfu00a3kbAk5"));

         services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
             .AddJwtBearer(options =>
             {
                 options.TokenValidationParameters = new TokenValidationParameters
                 {
                     ValidateIssuerSigningKey = true,
                     IssuerSigningKey = key,
                     ValidateIssuer = false,
                     ValidateAudience = false
                 };
             });
         
         
         services.AddScoped<TokenService>();

         return services;
     }
}