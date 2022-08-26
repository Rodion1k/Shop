using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using Shop.DataAccessLayer.Settings;

namespace Shop.DataAccessLayer
{
    public class GenericRepository<TDocument> :IGenericRepository<TDocument>
    {
        private IMongoCollection<TDocument> _mongoCollection;

        public GenericRepository(string connectionString, string databaseName, string collection)
        {
            var connection = new MongoClient(connectionString);
            _mongoCollection = connection.GetDatabase(databaseName).GetCollection<TDocument>(collection);
        }

        public async Task<IEnumerable<TDocument>> GetAll()
        {
            return await _mongoCollection.Find(_=>true).ToListAsync();
        }
    }
}