using Shop.DataAccessLayer.Settings;
using Shop.Domain;

namespace Shop.DataAccessLayer
{
    public class UnitOfWork
    {
        private IGenericRepository<Phone> _phonesRepository;

        public IGenericRepository<Phone> PhonesRepository
        {
            get
            {
                if (_phonesRepository == null)
                {
                    _phonesRepository = new GenericRepository<Phone>(MongoDbSettings.ConnectionString,MongoDbSettings.DatabaseName,"phones");
                }

                return _phonesRepository;
            }
        }
    }
}