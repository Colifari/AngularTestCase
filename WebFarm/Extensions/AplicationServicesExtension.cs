using System.Runtime;
using WebFarm.Models;

namespace WebFarm.Extensions
{
    public static class AplicationServicesExtension
    {
        /// <summary>
        /// Adds specified services and features for web app
        /// </summary>
        /// <param name="services"></param>
        /// <param name="config"></param>
        /// <returns></returns>
        public static IServiceCollection AddWebFarmApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddSingleton<IDataContext, DataContext>();

            services.AddCors(opt =>
            {
                // adding any CORS from localhost:3000
                opt.AddPolicy("ClientAppCorsPolicy", policy =>
                {
                    policy
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials()
                    .WithOrigins("http://localhost:4200", "http://127.0.0.1:4200");
                });
            });

            return services;
        }
    }
}
