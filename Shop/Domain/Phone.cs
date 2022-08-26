using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Shop.Domain
{
    public class Phone
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string ImgPath { get; set; }
    }
}