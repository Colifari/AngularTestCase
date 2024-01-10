namespace WebFarm.Models
{
    public interface IAnimalsTO
    {
        /// <summary>
        /// Performs creation of provided animal
        /// </summary>
        /// <param name="name">Animal name</param>
        /// <returns></returns>
        bool Create(string name);

        /// <summary>
        /// Returns all rows
        /// </summary>
        /// <returns></returns>
        string[] Select();

        /// <summary>
        /// Performs deletion of provided animal
        /// </summary>
        /// <param name="name">Animal name</param>
        /// <returns></returns>
        bool Delete(string name);
        
    }
}
