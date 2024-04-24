using ECommerce.Interfaces;
using ECommerce.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class productsController : ControllerBase
    {
        private readonly IGenericRepository<Product> _genericRepository;
        public productsController(IGenericRepository<Product> genericRepository)
        {
            _genericRepository = genericRepository;
        }
        [HttpGet]
        public IActionResult GetAllProducts()
        {
            try
            {
                var Data= _genericRepository.GetAll();
                return Ok(Data.Result);
            }catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        public IActionResult InsertProduct(Product product)
        {
            try
            {
                _genericRepository.Insert(product);
                return Ok();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [HttpPut]
        [Route("{id}")]
        public IActionResult updateProduct(int id,Product product)
        {
            try
            {
                _genericRepository.Update(id ,product);
                return Ok();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                _genericRepository.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
