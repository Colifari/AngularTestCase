namespace WebFarm.Models
{
    /// <summary>
    /// Represents in memory storage for animal table
    /// </summary>
    public class InMemoryAnimalsTO : IAnimalsTO
    {
        HashSet<string> animals = [];

        public bool Create(string name)
        {
            if(string.IsNullOrEmpty(name) || string.IsNullOrWhiteSpace(name))
                return false;

            return animals.Add(name);
        }

        public bool Delete(string name)
        {
            if (string.IsNullOrEmpty(name) || string.IsNullOrWhiteSpace(name))
                return false;

            return animals.Remove(name);
        }

        public string[] Select()
        {
            return animals.ToArray();
        }
    }
}
