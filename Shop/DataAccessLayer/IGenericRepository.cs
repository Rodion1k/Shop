using System.Collections.Generic;
using System.Threading.Tasks;

namespace Shop.DataAccessLayer
{
    public interface IGenericRepository<TDocument>
    {
        Task<IEnumerable<TDocument>> GetAll();
    }
}