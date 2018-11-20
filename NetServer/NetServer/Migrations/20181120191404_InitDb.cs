using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NetServer.Migrations
{
    public partial class InitDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SampleThings",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Date = table.Column<DateTime>(nullable: false),
                    Title = table.Column<string>(nullable: false),
                    Multiplier = table.Column<int>(nullable: false),
                    Cost = table.Column<double>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SampleThings", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "SampleThings",
                columns: new[] { "Id", "Cost", "Date", "IsActive", "Multiplier", "Title" },
                values: new object[,]
                {
                    { 1L, 1.1, new DateTime(2018, 1, 20, 19, 13, 53, 372, DateTimeKind.Utc), true, 45, "Y2EsQfiC0CXUeh1cI9EhA" },
                    { 76L, 83.6, new DateTime(2018, 2, 8, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "kmSG7xfNkGUCYRmFlKtxQ" },
                    { 75L, 82.5, new DateTime(2018, 2, 7, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "pOvuiTvzE0m5VxIXwlnwqA" },
                    { 74L, 81.4, new DateTime(2018, 2, 7, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "iXY2m8SmVU2bLkmfpZmgVA" },
                    { 73L, 80.3, new DateTime(2018, 2, 7, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "YUvyUrfrP0e5RvVoaKKOQ" },
                    { 72L, 79.2, new DateTime(2018, 2, 7, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "LA0baSz3UqAHOgGOjTLA" },
                    { 71L, 78.1, new DateTime(2018, 2, 6, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "JHGg1IFocEynXGRSOE4QA" },
                    { 70L, 77.0, new DateTime(2018, 2, 6, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "Z0sgmed1lUmeeAHTemHgw" },
                    { 69L, 75.9, new DateTime(2018, 2, 6, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "hrNLFCssp0GejxJfl9KpDA" },
                    { 68L, 74.8, new DateTime(2018, 2, 6, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "Bk5qg6cMqk2N6B9Gf2ewiw" },
                    { 67L, 73.7, new DateTime(2018, 2, 5, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "UdUVTfF7skShEOBgsmenEw" },
                    { 77L, 84.7, new DateTime(2018, 2, 8, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "7bAgfOYkCS6ESmFfvOxQ" },
                    { 66L, 72.6, new DateTime(2018, 2, 5, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "KCi2LVNckiMks8L3afWlQ" },
                    { 64L, 70.4, new DateTime(2018, 2, 5, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "BWDxQqnlU0q8ZVEXNWwGgg" },
                    { 63L, 69.3, new DateTime(2018, 2, 4, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "S4ndcY7Z4Ueu8ZXZ2duaoA" },
                    { 62L, 68.2, new DateTime(2018, 2, 4, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "rqt4PoNOUq5PnKhQ5g6YQ" },
                    { 61L, 67.1, new DateTime(2018, 2, 4, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "CPgg5I9IXkKuO8jaCzv0XQ" },
                    { 60L, 66.0, new DateTime(2018, 2, 4, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "zxfkYn9Ex0iCTFqQ6miVg" },
                    { 59L, 64.9, new DateTime(2018, 2, 3, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "qhqdbpBnUm6Ekpq58pKQ" },
                    { 58L, 63.8, new DateTime(2018, 2, 3, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "V2iMIgSPRUEOAsiQ2J4Jg" },
                    { 57L, 62.7, new DateTime(2018, 2, 3, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "P2P4GtPGWEyuY10zVBNCjA" },
                    { 56L, 61.6, new DateTime(2018, 2, 3, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "5lvJijIUH0KP2s5odk0ABg" },
                    { 55L, 60.5, new DateTime(2018, 2, 2, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "W160HxpWqE6WhcAWBgdOwA" },
                    { 65L, 71.5, new DateTime(2018, 2, 5, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "iuE9PYaygEWOuP5MOxdQ" },
                    { 78L, 85.8, new DateTime(2018, 2, 8, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "9qfgqZs2o0G6H4UCQMBhg" },
                    { 79L, 86.9, new DateTime(2018, 2, 8, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "sUL1elJLo0KKwp5n8nSeNg" },
                    { 80L, 88.0, new DateTime(2018, 2, 9, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "Ees9oupUuAX91FILCRIg" },
                    { 103L, 113.3, new DateTime(2018, 2, 14, 19, 13, 53, 372, DateTimeKind.Utc), true, 0, "FzdVcTzkpkew6CEhvRs6CQ" },
                    { 102L, 112.2, new DateTime(2018, 2, 14, 19, 13, 53, 372, DateTimeKind.Utc), false, 0, "Nt9git6woUyo6oOdodZIpg" },
                    { 101L, 111.1, new DateTime(2018, 2, 14, 19, 13, 53, 372, DateTimeKind.Utc), true, 0, "hKWOUGfHUKGtgHNfuVbWg" },
                    { 100L, 110.0, new DateTime(2018, 2, 14, 19, 13, 53, 372, DateTimeKind.Utc), true, 0, "vgHlFPxLyUmqVr22M9GtA" },
                    { 99L, 108.9, new DateTime(2018, 2, 13, 19, 13, 53, 372, DateTimeKind.Utc), false, 0, "LymkGIGdE0WceX1HFYV6A" },
                    { 98L, 107.8, new DateTime(2018, 2, 13, 19, 13, 53, 372, DateTimeKind.Utc), true, 0, "2Zh5kFY2fE2QLrQseNbcsw" },
                    { 97L, 106.7, new DateTime(2018, 2, 13, 19, 13, 53, 372, DateTimeKind.Utc), true, 0, "WgpASltHEKtZKJtw8F2pg" },
                    { 96L, 105.6, new DateTime(2018, 2, 13, 19, 13, 53, 372, DateTimeKind.Utc), false, 0, "aInxqvJrEaP7Hm4x2BDmg" },
                    { 95L, 104.5, new DateTime(2018, 2, 12, 19, 13, 53, 372, DateTimeKind.Utc), true, 0, "oZBkqBshkkaidlcFk154w" },
                    { 94L, 103.4, new DateTime(2018, 2, 12, 19, 13, 53, 372, DateTimeKind.Utc), true, 0, "68sf63yhmUOHxjQ56n2oMw" },
                    { 93L, 102.3, new DateTime(2018, 2, 12, 19, 13, 53, 372, DateTimeKind.Utc), false, 0, "qQPlsPz8LUy8KYx3l8xaQ" },
                    { 92L, 101.2, new DateTime(2018, 2, 12, 19, 13, 53, 372, DateTimeKind.Utc), true, 0, "PF8PmVT2oUWkCjE9PidVg" },
                    { 91L, 100.1, new DateTime(2018, 2, 11, 19, 13, 53, 372, DateTimeKind.Utc), true, 0, "RlXhqixwUOJPQ42gVa39A" },
                    { 90L, 99.0, new DateTime(2018, 2, 11, 19, 13, 53, 372, DateTimeKind.Utc), false, 0, "lfnv1NLJdUGdoazaOnAEjw" },
                    { 89L, 97.9, new DateTime(2018, 2, 11, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "XpoGMgDKkSquNdPJ79YDg" },
                    { 88L, 96.8, new DateTime(2018, 2, 11, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "gAc5644b0u22J1vjZDOoA" },
                    { 87L, 95.7, new DateTime(2018, 2, 10, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "TW68tpYREaOaM7EcKDKmg" },
                    { 86L, 94.6, new DateTime(2018, 2, 10, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "TC17ZqdLJUi4Ein1R6ZoSw" },
                    { 85L, 93.5, new DateTime(2018, 2, 10, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "UD98CwWWkCfY99Je1vg9A" },
                    { 84L, 92.4, new DateTime(2018, 2, 10, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "uebMGUXhZ0qCt9aZvaLJ8g" },
                    { 83L, 91.3, new DateTime(2018, 2, 9, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "aoQLY9IzeUOhW81M7IFAsg" },
                    { 82L, 90.2, new DateTime(2018, 2, 9, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "sHCQRAGKhU6pTTqL7o5hQ" },
                    { 81L, 89.1, new DateTime(2018, 2, 9, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "BjW8lYbLkGoZsPcgeRVLA" },
                    { 54L, 59.4, new DateTime(2018, 2, 2, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "J01ZG3ld0yyyX04WNo2TQ" },
                    { 104L, 114.4, new DateTime(2018, 2, 15, 19, 13, 53, 372, DateTimeKind.Utc), true, 0, "wpqBiuUDu0i23Zyy1ismIQ" },
                    { 53L, 58.3, new DateTime(2018, 2, 2, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "6lpWNnShk6uwX320imIpw" },
                    { 51L, 56.1, new DateTime(2018, 2, 1, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "4i9IgsDdJUS3cvTU6Ew2uQ" },
                    { 23L, 25.3, new DateTime(2018, 1, 25, 19, 13, 53, 372, DateTimeKind.Utc), true, 3, "VLeUeqOB506XKNT62Ctctg" },
                    { 22L, 24.2, new DateTime(2018, 1, 25, 19, 13, 53, 372, DateTimeKind.Utc), true, 3, "wZ7eTZk68kmCJLVR7I5POg" },
                    { 21L, 23.1, new DateTime(2018, 1, 25, 19, 13, 53, 372, DateTimeKind.Utc), false, 4, "Q4GHN3oZUO0cUUryAWO7w" },
                    { 20L, 22.0, new DateTime(2018, 1, 25, 19, 13, 53, 372, DateTimeKind.Utc), true, 4, "QlZ9A2fgdUmth9cCwwjQ" },
                    { 19L, 20.9, new DateTime(2018, 1, 24, 19, 13, 53, 372, DateTimeKind.Utc), true, 4, "50s0Khqqf0y0mhzb6PFZ7w" },
                    { 18L, 19.8, new DateTime(2018, 1, 24, 19, 13, 53, 372, DateTimeKind.Utc), false, 4, "uyldseIXOkH1tqtjBrEw" },
                    { 17L, 18.7, new DateTime(2018, 1, 24, 19, 13, 53, 372, DateTimeKind.Utc), true, 5, "rAhnJDbZAEKx0HBNWSzyA" },
                    { 16L, 17.6, new DateTime(2018, 1, 24, 19, 13, 53, 372, DateTimeKind.Utc), true, 5, "cWEg9VlSrEWibxNj1BQAA" },
                    { 15L, 16.5, new DateTime(2018, 1, 23, 19, 13, 53, 372, DateTimeKind.Utc), false, 5, "GWQ9kpNyUyG73cjkmrdHQ" },
                    { 14L, 15.4, new DateTime(2018, 1, 23, 19, 13, 53, 372, DateTimeKind.Utc), true, 6, "ni1MJp5B5EGDws9bBfjjA" },
                    { 24L, 26.4, new DateTime(2018, 1, 26, 19, 13, 53, 372, DateTimeKind.Utc), false, 3, "2vRITIewBkmHC2ot57jaQ" },
                    { 13L, 14.3, new DateTime(2018, 1, 23, 19, 13, 53, 372, DateTimeKind.Utc), true, 6, "En0fFNI0hkuZc5OPb2XphA" },
                    { 11L, 12.1, new DateTime(2018, 1, 22, 19, 13, 53, 372, DateTimeKind.Utc), true, 7, "i8GTJMNfa0ivQtTxgmEcWw" },
                    { 10L, 11.0, new DateTime(2018, 1, 22, 19, 13, 53, 372, DateTimeKind.Utc), true, 8, "CIn5mRyVQUOvZBk9huHcg" },
                    { 9L, 9.9, new DateTime(2018, 1, 22, 19, 13, 53, 372, DateTimeKind.Utc), false, 9, "xPT2gELD30mbpOmPszSuFQ" },
                    { 8L, 8.8, new DateTime(2018, 1, 22, 19, 13, 53, 372, DateTimeKind.Utc), true, 10, "YXT8HXrokkutB5mTmpxNWA" },
                    { 7L, 7.7, new DateTime(2018, 1, 21, 19, 13, 53, 372, DateTimeKind.Utc), true, 11, "hkjpeQQv80O0Z87TLAJeaA" },
                    { 6L, 6.6, new DateTime(2018, 1, 21, 19, 13, 53, 372, DateTimeKind.Utc), false, 12, "YZ2Ta1E3akC3xzaaTs5yTw" },
                    { 5L, 5.5, new DateTime(2018, 1, 21, 19, 13, 53, 372, DateTimeKind.Utc), true, 15, "HjG7MllOeU2jtQhxYLewzw" },
                    { 4L, 4.4, new DateTime(2018, 1, 21, 19, 13, 53, 372, DateTimeKind.Utc), true, 18, "88ePGKJY6ke5tkunJ7unA" },
                    { 3L, 3.3, new DateTime(2018, 1, 20, 19, 13, 53, 372, DateTimeKind.Utc), false, 22, "iiiBLqmEY0GnKqSKGdLJbw" },
                    { 2L, 2.2, new DateTime(2018, 1, 20, 19, 13, 53, 372, DateTimeKind.Utc), true, 30, "0ST72ExFyESISPdO4hA2Vw" },
                    { 12L, 13.2, new DateTime(2018, 1, 23, 19, 13, 53, 372, DateTimeKind.Utc), false, 6, "cu6M9tG2NESPc8lzms58Q" },
                    { 25L, 27.5, new DateTime(2018, 1, 26, 19, 13, 53, 372, DateTimeKind.Utc), true, 3, "WmI5ajackEuHs4pUJX14A" },
                    { 26L, 28.6, new DateTime(2018, 1, 26, 19, 13, 53, 372, DateTimeKind.Utc), true, 3, "zJblTz0JTEyP5CIYdriDQA" },
                    { 27L, 29.7, new DateTime(2018, 1, 26, 19, 13, 53, 372, DateTimeKind.Utc), false, 3, "8QdoCfHoUetJfhETa2yvw" },
                    { 50L, 55.0, new DateTime(2018, 2, 1, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "WEm67Wwko0qpw87XEHkp1g" },
                    { 49L, 53.9, new DateTime(2018, 2, 1, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "XqS4Lc39zk6nCJvfviZ4w" },
                    { 48L, 52.8, new DateTime(2018, 2, 1, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "ARICfTuoykC0h6AYZvMiZw" },
                    { 47L, 51.7, new DateTime(2018, 1, 31, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "dPedwoQ5vEqnfi0XGfZDw" },
                    { 46L, 50.6, new DateTime(2018, 1, 31, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "81iJIeVWyUt8kHRytxGg" },
                    { 45L, 49.5, new DateTime(2018, 1, 31, 19, 13, 53, 372, DateTimeKind.Utc), false, 1, "wkGu8R3CpkK5jeadwjgHSw" },
                    { 44L, 48.4, new DateTime(2018, 1, 31, 19, 13, 53, 372, DateTimeKind.Utc), true, 2, "QN7GgBqINE6oOZRyjSKoDQ" },
                    { 43L, 47.3, new DateTime(2018, 1, 30, 19, 13, 53, 372, DateTimeKind.Utc), true, 2, "DGiforG20E23ROr8N2jgw" },
                    { 42L, 46.2, new DateTime(2018, 1, 30, 19, 13, 53, 372, DateTimeKind.Utc), false, 2, "PD01giAm06ySsjV79GjtA" },
                    { 41L, 45.1, new DateTime(2018, 1, 30, 19, 13, 53, 372, DateTimeKind.Utc), true, 2, "QIb8G0swmUq1Z8vMctoiw" },
                    { 40L, 44.0, new DateTime(2018, 1, 30, 19, 13, 53, 372, DateTimeKind.Utc), true, 2, "NsdHCP8Z1E669SCAWY9IVg" },
                    { 39L, 42.9, new DateTime(2018, 1, 29, 19, 13, 53, 372, DateTimeKind.Utc), false, 2, "bbOCvnxozUGFGcHemCHIfg" },
                    { 38L, 41.8, new DateTime(2018, 1, 29, 19, 13, 53, 372, DateTimeKind.Utc), true, 2, "jGsoOtSBw02kTKB3EWigw" },
                    { 37L, 40.7, new DateTime(2018, 1, 29, 19, 13, 53, 372, DateTimeKind.Utc), true, 2, "GHDM0iQiZ0yGQVt7zcVuQ" },
                    { 36L, 39.6, new DateTime(2018, 1, 29, 19, 13, 53, 372, DateTimeKind.Utc), false, 2, "veHDHCeo0yHLm1Uf8m9Hg" },
                    { 35L, 38.5, new DateTime(2018, 1, 28, 19, 13, 53, 372, DateTimeKind.Utc), true, 2, "qK6im5PhdEK2YmPaa2M0TA" },
                    { 34L, 37.4, new DateTime(2018, 1, 28, 19, 13, 53, 372, DateTimeKind.Utc), true, 2, "eFPG3l8WvEqEB77bvzKw" },
                    { 33L, 36.3, new DateTime(2018, 1, 28, 19, 13, 53, 372, DateTimeKind.Utc), false, 2, "bimnT2y7PEGoEkWhkCefpQ" },
                    { 32L, 35.2, new DateTime(2018, 1, 28, 19, 13, 53, 372, DateTimeKind.Utc), true, 2, "W5A2nnDZUqxgls4qJnaw" },
                    { 31L, 34.1, new DateTime(2018, 1, 27, 19, 13, 53, 372, DateTimeKind.Utc), true, 2, "SmxVIjd4cke7tUSfKclQoA" },
                    { 30L, 33.0, new DateTime(2018, 1, 27, 19, 13, 53, 372, DateTimeKind.Utc), false, 2, "3Pl2lArpUKD2i9iKu7Oew" },
                    { 29L, 31.9, new DateTime(2018, 1, 27, 19, 13, 53, 372, DateTimeKind.Utc), true, 3, "mVRy7qEDrUey2ByMr9Siw" },
                    { 28L, 30.8, new DateTime(2018, 1, 27, 19, 13, 53, 372, DateTimeKind.Utc), true, 3, "nmviBUScLUm5D0fGO2oYhg" },
                    { 52L, 57.2, new DateTime(2018, 2, 2, 19, 13, 53, 372, DateTimeKind.Utc), true, 1, "dKddpJQp5U65rllB1GhiyA" },
                    { 105L, 115.5, new DateTime(2018, 2, 15, 19, 13, 53, 372, DateTimeKind.Utc), false, 0, "45MRwnWDPEmVUCsED3VBeg" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SampleThings");
        }
    }
}
