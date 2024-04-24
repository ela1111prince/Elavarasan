using ECommerce.Models;

namespace ECommerce.Interfaces
{
    public interface IGenericRepository<T> where T: class
    {
        public Task<IEnumerable<T>> GetAll();
        public Task Insert(T product);
        public Task Update(int id,T product);
        public Task Delete(int id);

    }
}
