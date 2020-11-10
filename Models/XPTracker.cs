using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DnDHooksFullStack.Models
{
    public class XPTracker
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("totalXp")]
        public int TotalXP { get; set; }
        [JsonPropertyName("totalLevel")]
        public int TotalLevel { get; set; }
        public List<SessionTracker> Sessions { get; set; } = new List<SessionTracker>();
    }
}