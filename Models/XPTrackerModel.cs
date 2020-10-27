using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DnDHooksFullStack.Models
{
    public class XPTrackerModel
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("totalXp")]
        public int TotalXP { get; set; }
        [JsonPropertyName("totalLevel")]
        public int TotalLevel { get; set; }
        public List<SessionTrackerModel> Sessions { get; set; } = new List<SessionTrackerModel>();
    }
}