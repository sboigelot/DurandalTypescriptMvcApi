using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DurandalTodoListCrud.Startup))]
namespace DurandalTodoListCrud
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
