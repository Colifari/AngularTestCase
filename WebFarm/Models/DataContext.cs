using System.Runtime;
using System.Text.RegularExpressions;

namespace WebFarm.Models
{
    public class DataContext : IDataContext
    {
        public IAnimalsTO Animals { get; set; }

        public DataContext()
        {
            Animals = new InMemoryAnimalsTO();
        }
    }

    public interface IDataContext
    {
        /// <summary>
        /// Animals table
        /// </summary>
        IAnimalsTO Animals { get; set; }
    }
}
