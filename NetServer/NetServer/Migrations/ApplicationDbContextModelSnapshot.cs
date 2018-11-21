﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NetServer.Data;

namespace NetServer.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("NetServer.Models.SampleThing", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Cost");

                    b.Property<DateTime>("Date");

                    b.Property<bool>("IsActive");

                    b.Property<int>("Multiplier");

                    b.Property<string>("Title")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("SampleThings");

                    b.HasData(
                        new { Id = 1L, Cost = 1.1, Date = new DateTime(2018, 1, 20, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 45, Title = "Y2EsQfiC0CXUeh1cI9EhA" },
                        new { Id = 2L, Cost = 2.2, Date = new DateTime(2018, 1, 20, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 30, Title = "0ST72ExFyESISPdO4hA2Vw" },
                        new { Id = 3L, Cost = 3.3, Date = new DateTime(2018, 1, 20, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 22, Title = "iiiBLqmEY0GnKqSKGdLJbw" },
                        new { Id = 4L, Cost = 4.4, Date = new DateTime(2018, 1, 21, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 18, Title = "88ePGKJY6ke5tkunJ7unA" },
                        new { Id = 5L, Cost = 5.5, Date = new DateTime(2018, 1, 21, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 15, Title = "HjG7MllOeU2jtQhxYLewzw" },
                        new { Id = 6L, Cost = 6.6, Date = new DateTime(2018, 1, 21, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 12, Title = "YZ2Ta1E3akC3xzaaTs5yTw" },
                        new { Id = 7L, Cost = 7.7, Date = new DateTime(2018, 1, 21, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 11, Title = "hkjpeQQv80O0Z87TLAJeaA" },
                        new { Id = 8L, Cost = 8.8, Date = new DateTime(2018, 1, 22, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 10, Title = "YXT8HXrokkutB5mTmpxNWA" },
                        new { Id = 9L, Cost = 9.9, Date = new DateTime(2018, 1, 22, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 9, Title = "xPT2gELD30mbpOmPszSuFQ" },
                        new { Id = 10L, Cost = 11.0, Date = new DateTime(2018, 1, 22, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 8, Title = "CIn5mRyVQUOvZBk9huHcg" },
                        new { Id = 11L, Cost = 12.1, Date = new DateTime(2018, 1, 22, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 7, Title = "i8GTJMNfa0ivQtTxgmEcWw" },
                        new { Id = 12L, Cost = 13.2, Date = new DateTime(2018, 1, 23, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 6, Title = "cu6M9tG2NESPc8lzms58Q" },
                        new { Id = 13L, Cost = 14.3, Date = new DateTime(2018, 1, 23, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 6, Title = "En0fFNI0hkuZc5OPb2XphA" },
                        new { Id = 14L, Cost = 15.4, Date = new DateTime(2018, 1, 23, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 6, Title = "ni1MJp5B5EGDws9bBfjjA" },
                        new { Id = 15L, Cost = 16.5, Date = new DateTime(2018, 1, 23, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 5, Title = "GWQ9kpNyUyG73cjkmrdHQ" },
                        new { Id = 16L, Cost = 17.6, Date = new DateTime(2018, 1, 24, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 5, Title = "cWEg9VlSrEWibxNj1BQAA" },
                        new { Id = 17L, Cost = 18.7, Date = new DateTime(2018, 1, 24, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 5, Title = "rAhnJDbZAEKx0HBNWSzyA" },
                        new { Id = 18L, Cost = 19.8, Date = new DateTime(2018, 1, 24, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 4, Title = "uyldseIXOkH1tqtjBrEw" },
                        new { Id = 19L, Cost = 20.9, Date = new DateTime(2018, 1, 24, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 4, Title = "50s0Khqqf0y0mhzb6PFZ7w" },
                        new { Id = 20L, Cost = 22.0, Date = new DateTime(2018, 1, 25, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 4, Title = "QlZ9A2fgdUmth9cCwwjQ" },
                        new { Id = 21L, Cost = 23.1, Date = new DateTime(2018, 1, 25, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 4, Title = "Q4GHN3oZUO0cUUryAWO7w" },
                        new { Id = 22L, Cost = 24.2, Date = new DateTime(2018, 1, 25, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 3, Title = "wZ7eTZk68kmCJLVR7I5POg" },
                        new { Id = 23L, Cost = 25.3, Date = new DateTime(2018, 1, 25, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 3, Title = "VLeUeqOB506XKNT62Ctctg" },
                        new { Id = 24L, Cost = 26.4, Date = new DateTime(2018, 1, 26, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 3, Title = "2vRITIewBkmHC2ot57jaQ" },
                        new { Id = 25L, Cost = 27.5, Date = new DateTime(2018, 1, 26, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 3, Title = "WmI5ajackEuHs4pUJX14A" },
                        new { Id = 26L, Cost = 28.6, Date = new DateTime(2018, 1, 26, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 3, Title = "zJblTz0JTEyP5CIYdriDQA" },
                        new { Id = 27L, Cost = 29.7, Date = new DateTime(2018, 1, 26, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 3, Title = "8QdoCfHoUetJfhETa2yvw" },
                        new { Id = 28L, Cost = 30.8, Date = new DateTime(2018, 1, 27, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 3, Title = "nmviBUScLUm5D0fGO2oYhg" },
                        new { Id = 29L, Cost = 31.9, Date = new DateTime(2018, 1, 27, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 3, Title = "mVRy7qEDrUey2ByMr9Siw" },
                        new { Id = 30L, Cost = 33.0, Date = new DateTime(2018, 1, 27, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 2, Title = "3Pl2lArpUKD2i9iKu7Oew" },
                        new { Id = 31L, Cost = 34.1, Date = new DateTime(2018, 1, 27, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 2, Title = "SmxVIjd4cke7tUSfKclQoA" },
                        new { Id = 32L, Cost = 35.2, Date = new DateTime(2018, 1, 28, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 2, Title = "W5A2nnDZUqxgls4qJnaw" },
                        new { Id = 33L, Cost = 36.3, Date = new DateTime(2018, 1, 28, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 2, Title = "bimnT2y7PEGoEkWhkCefpQ" },
                        new { Id = 34L, Cost = 37.4, Date = new DateTime(2018, 1, 28, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 2, Title = "eFPG3l8WvEqEB77bvzKw" },
                        new { Id = 35L, Cost = 38.5, Date = new DateTime(2018, 1, 28, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 2, Title = "qK6im5PhdEK2YmPaa2M0TA" },
                        new { Id = 36L, Cost = 39.6, Date = new DateTime(2018, 1, 29, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 2, Title = "veHDHCeo0yHLm1Uf8m9Hg" },
                        new { Id = 37L, Cost = 40.7, Date = new DateTime(2018, 1, 29, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 2, Title = "GHDM0iQiZ0yGQVt7zcVuQ" },
                        new { Id = 38L, Cost = 41.8, Date = new DateTime(2018, 1, 29, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 2, Title = "jGsoOtSBw02kTKB3EWigw" },
                        new { Id = 39L, Cost = 42.9, Date = new DateTime(2018, 1, 29, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 2, Title = "bbOCvnxozUGFGcHemCHIfg" },
                        new { Id = 40L, Cost = 44.0, Date = new DateTime(2018, 1, 30, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 2, Title = "NsdHCP8Z1E669SCAWY9IVg" },
                        new { Id = 41L, Cost = 45.1, Date = new DateTime(2018, 1, 30, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 2, Title = "QIb8G0swmUq1Z8vMctoiw" },
                        new { Id = 42L, Cost = 46.2, Date = new DateTime(2018, 1, 30, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 2, Title = "PD01giAm06ySsjV79GjtA" },
                        new { Id = 43L, Cost = 47.3, Date = new DateTime(2018, 1, 30, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 2, Title = "DGiforG20E23ROr8N2jgw" },
                        new { Id = 44L, Cost = 48.4, Date = new DateTime(2018, 1, 31, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 2, Title = "QN7GgBqINE6oOZRyjSKoDQ" },
                        new { Id = 45L, Cost = 49.5, Date = new DateTime(2018, 1, 31, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "wkGu8R3CpkK5jeadwjgHSw" },
                        new { Id = 46L, Cost = 50.6, Date = new DateTime(2018, 1, 31, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "81iJIeVWyUt8kHRytxGg" },
                        new { Id = 47L, Cost = 51.7, Date = new DateTime(2018, 1, 31, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "dPedwoQ5vEqnfi0XGfZDw" },
                        new { Id = 48L, Cost = 52.8, Date = new DateTime(2018, 2, 1, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "ARICfTuoykC0h6AYZvMiZw" },
                        new { Id = 49L, Cost = 53.9, Date = new DateTime(2018, 2, 1, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "XqS4Lc39zk6nCJvfviZ4w" },
                        new { Id = 50L, Cost = 55.0, Date = new DateTime(2018, 2, 1, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "WEm67Wwko0qpw87XEHkp1g" },
                        new { Id = 51L, Cost = 56.1, Date = new DateTime(2018, 2, 1, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "4i9IgsDdJUS3cvTU6Ew2uQ" },
                        new { Id = 52L, Cost = 57.2, Date = new DateTime(2018, 2, 2, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "dKddpJQp5U65rllB1GhiyA" },
                        new { Id = 53L, Cost = 58.3, Date = new DateTime(2018, 2, 2, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "6lpWNnShk6uwX320imIpw" },
                        new { Id = 54L, Cost = 59.4, Date = new DateTime(2018, 2, 2, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "J01ZG3ld0yyyX04WNo2TQ" },
                        new { Id = 55L, Cost = 60.5, Date = new DateTime(2018, 2, 2, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "W160HxpWqE6WhcAWBgdOwA" },
                        new { Id = 56L, Cost = 61.6, Date = new DateTime(2018, 2, 3, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "5lvJijIUH0KP2s5odk0ABg" },
                        new { Id = 57L, Cost = 62.7, Date = new DateTime(2018, 2, 3, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "P2P4GtPGWEyuY10zVBNCjA" },
                        new { Id = 58L, Cost = 63.8, Date = new DateTime(2018, 2, 3, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "V2iMIgSPRUEOAsiQ2J4Jg" },
                        new { Id = 59L, Cost = 64.9, Date = new DateTime(2018, 2, 3, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "qhqdbpBnUm6Ekpq58pKQ" },
                        new { Id = 60L, Cost = 66.0, Date = new DateTime(2018, 2, 4, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "zxfkYn9Ex0iCTFqQ6miVg" },
                        new { Id = 61L, Cost = 67.1, Date = new DateTime(2018, 2, 4, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "CPgg5I9IXkKuO8jaCzv0XQ" },
                        new { Id = 62L, Cost = 68.2, Date = new DateTime(2018, 2, 4, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "rqt4PoNOUq5PnKhQ5g6YQ" },
                        new { Id = 63L, Cost = 69.3, Date = new DateTime(2018, 2, 4, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "S4ndcY7Z4Ueu8ZXZ2duaoA" },
                        new { Id = 64L, Cost = 70.4, Date = new DateTime(2018, 2, 5, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "BWDxQqnlU0q8ZVEXNWwGgg" },
                        new { Id = 65L, Cost = 71.5, Date = new DateTime(2018, 2, 5, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "iuE9PYaygEWOuP5MOxdQ" },
                        new { Id = 66L, Cost = 72.6, Date = new DateTime(2018, 2, 5, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "KCi2LVNckiMks8L3afWlQ" },
                        new { Id = 67L, Cost = 73.7, Date = new DateTime(2018, 2, 5, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "UdUVTfF7skShEOBgsmenEw" },
                        new { Id = 68L, Cost = 74.8, Date = new DateTime(2018, 2, 6, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "Bk5qg6cMqk2N6B9Gf2ewiw" },
                        new { Id = 69L, Cost = 75.9, Date = new DateTime(2018, 2, 6, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "hrNLFCssp0GejxJfl9KpDA" },
                        new { Id = 70L, Cost = 77.0, Date = new DateTime(2018, 2, 6, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "Z0sgmed1lUmeeAHTemHgw" },
                        new { Id = 71L, Cost = 78.1, Date = new DateTime(2018, 2, 6, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "JHGg1IFocEynXGRSOE4QA" },
                        new { Id = 72L, Cost = 79.2, Date = new DateTime(2018, 2, 7, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "LA0baSz3UqAHOgGOjTLA" },
                        new { Id = 73L, Cost = 80.3, Date = new DateTime(2018, 2, 7, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "YUvyUrfrP0e5RvVoaKKOQ" },
                        new { Id = 74L, Cost = 81.4, Date = new DateTime(2018, 2, 7, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "iXY2m8SmVU2bLkmfpZmgVA" },
                        new { Id = 75L, Cost = 82.5, Date = new DateTime(2018, 2, 7, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "pOvuiTvzE0m5VxIXwlnwqA" },
                        new { Id = 76L, Cost = 83.6, Date = new DateTime(2018, 2, 8, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "kmSG7xfNkGUCYRmFlKtxQ" },
                        new { Id = 77L, Cost = 84.7, Date = new DateTime(2018, 2, 8, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "7bAgfOYkCS6ESmFfvOxQ" },
                        new { Id = 78L, Cost = 85.8, Date = new DateTime(2018, 2, 8, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "9qfgqZs2o0G6H4UCQMBhg" },
                        new { Id = 79L, Cost = 86.9, Date = new DateTime(2018, 2, 8, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "sUL1elJLo0KKwp5n8nSeNg" },
                        new { Id = 80L, Cost = 88.0, Date = new DateTime(2018, 2, 9, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "Ees9oupUuAX91FILCRIg" },
                        new { Id = 81L, Cost = 89.1, Date = new DateTime(2018, 2, 9, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "BjW8lYbLkGoZsPcgeRVLA" },
                        new { Id = 82L, Cost = 90.2, Date = new DateTime(2018, 2, 9, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "sHCQRAGKhU6pTTqL7o5hQ" },
                        new { Id = 83L, Cost = 91.3, Date = new DateTime(2018, 2, 9, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "aoQLY9IzeUOhW81M7IFAsg" },
                        new { Id = 84L, Cost = 92.4, Date = new DateTime(2018, 2, 10, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "uebMGUXhZ0qCt9aZvaLJ8g" },
                        new { Id = 85L, Cost = 93.5, Date = new DateTime(2018, 2, 10, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "UD98CwWWkCfY99Je1vg9A" },
                        new { Id = 86L, Cost = 94.6, Date = new DateTime(2018, 2, 10, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "TC17ZqdLJUi4Ein1R6ZoSw" },
                        new { Id = 87L, Cost = 95.7, Date = new DateTime(2018, 2, 10, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 1, Title = "TW68tpYREaOaM7EcKDKmg" },
                        new { Id = 88L, Cost = 96.8, Date = new DateTime(2018, 2, 11, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "gAc5644b0u22J1vjZDOoA" },
                        new { Id = 89L, Cost = 97.9, Date = new DateTime(2018, 2, 11, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 1, Title = "XpoGMgDKkSquNdPJ79YDg" },
                        new { Id = 90L, Cost = 99.0, Date = new DateTime(2018, 2, 11, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 0, Title = "lfnv1NLJdUGdoazaOnAEjw" },
                        new { Id = 91L, Cost = 100.1, Date = new DateTime(2018, 2, 11, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 0, Title = "RlXhqixwUOJPQ42gVa39A" },
                        new { Id = 92L, Cost = 101.2, Date = new DateTime(2018, 2, 12, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 0, Title = "PF8PmVT2oUWkCjE9PidVg" },
                        new { Id = 93L, Cost = 102.3, Date = new DateTime(2018, 2, 12, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 0, Title = "qQPlsPz8LUy8KYx3l8xaQ" },
                        new { Id = 94L, Cost = 103.4, Date = new DateTime(2018, 2, 12, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 0, Title = "68sf63yhmUOHxjQ56n2oMw" },
                        new { Id = 95L, Cost = 104.5, Date = new DateTime(2018, 2, 12, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 0, Title = "oZBkqBshkkaidlcFk154w" },
                        new { Id = 96L, Cost = 105.6, Date = new DateTime(2018, 2, 13, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 0, Title = "aInxqvJrEaP7Hm4x2BDmg" },
                        new { Id = 97L, Cost = 106.7, Date = new DateTime(2018, 2, 13, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 0, Title = "WgpASltHEKtZKJtw8F2pg" },
                        new { Id = 98L, Cost = 107.8, Date = new DateTime(2018, 2, 13, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 0, Title = "2Zh5kFY2fE2QLrQseNbcsw" },
                        new { Id = 99L, Cost = 108.9, Date = new DateTime(2018, 2, 13, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 0, Title = "LymkGIGdE0WceX1HFYV6A" },
                        new { Id = 100L, Cost = 110.0, Date = new DateTime(2018, 2, 14, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 0, Title = "vgHlFPxLyUmqVr22M9GtA" },
                        new { Id = 101L, Cost = 111.1, Date = new DateTime(2018, 2, 14, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 0, Title = "hKWOUGfHUKGtgHNfuVbWg" },
                        new { Id = 102L, Cost = 112.2, Date = new DateTime(2018, 2, 14, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 0, Title = "Nt9git6woUyo6oOdodZIpg" },
                        new { Id = 103L, Cost = 113.3, Date = new DateTime(2018, 2, 14, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 0, Title = "FzdVcTzkpkew6CEhvRs6CQ" },
                        new { Id = 104L, Cost = 114.4, Date = new DateTime(2018, 2, 15, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = true, Multiplier = 0, Title = "wpqBiuUDu0i23Zyy1ismIQ" },
                        new { Id = 105L, Cost = 115.5, Date = new DateTime(2018, 2, 15, 19, 13, 53, 372, DateTimeKind.Utc), IsActive = false, Multiplier = 0, Title = "45MRwnWDPEmVUCsED3VBeg" }
                    );
                });
#pragma warning restore 612, 618
        }
    }
}