using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(bat_mvc.Startup))]
namespace bat_mvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
