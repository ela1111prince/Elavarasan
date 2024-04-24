using ECommerce.Interfaces;
using ECommerce.Models;
using ECommerce.DBContext;
using Microsoft.EntityFrameworkCore;

namespace ECommerce.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    { 
        private readonly AppDBContext _dbContext;
        private DbSet<T> entities;

        public GenericRepository(AppDBContext appDBContext)
        {
            this._dbContext=appDBContext;
            entities = _dbContext.Set<T>();
        }
        public async Task<IEnumerable<T>> GetAll()
        {
            try
            {
                return await entities.ToListAsync();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
        public async Task Insert(T Entity)
        {
            try
            {
                await entities.AddAsync(Entity);
                await _dbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        public async Task Update(int id, T Entity)
        {
            try
            {
                
                entities.Update(Entity);
                _dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        public async Task Delete(int id)
        {
            try
            {
                var entity = await entities.FindAsync(id);
                if (entity != null)
                {
                    entities.Remove(entity);
                    _dbContext.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

    }
}
