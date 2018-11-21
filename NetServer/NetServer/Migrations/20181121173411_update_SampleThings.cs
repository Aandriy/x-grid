using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NetServer.Migrations
{
    public partial class update_SampleThings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Created",
                table: "SampleThings",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "Updated",
                table: "SampleThings",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 1L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 21, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 21, 17, 34, 9, 950, DateTimeKind.Utc), "7Sq6eBLMrEaIMYqy08xIbw", new DateTime(2018, 1, 21, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 2L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 21, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 21, 17, 34, 9, 950, DateTimeKind.Utc), "KNQrZyFnrEm1czJgwlAvQ", new DateTime(2018, 1, 21, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 3L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 21, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 21, 17, 34, 9, 950, DateTimeKind.Utc), "AcCVgIIdS0iBBr8r4c2eA", new DateTime(2018, 1, 21, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 4L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 22, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 22, 17, 34, 9, 950, DateTimeKind.Utc), "NTpm5qTyVky8G7H4MorWkQ", new DateTime(2018, 1, 22, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 5L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 22, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 22, 17, 34, 9, 950, DateTimeKind.Utc), "PCx0exCjMk6OpU4wsPJdkA", new DateTime(2018, 1, 22, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 6L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 22, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 22, 17, 34, 9, 950, DateTimeKind.Utc), "XPrACSr7tEq1uGkmunmg", new DateTime(2018, 1, 22, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 7L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 22, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 22, 17, 34, 9, 950, DateTimeKind.Utc), "CnZtXtfRkmZ0abRpVBsjg", new DateTime(2018, 1, 22, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 8L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 23, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 23, 17, 34, 9, 950, DateTimeKind.Utc), "9JowuUlDzUGxH05WIBHXrg", new DateTime(2018, 1, 23, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 9L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 23, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 23, 17, 34, 9, 950, DateTimeKind.Utc), "avieAchDVkqbM4qWnZ3aFA", new DateTime(2018, 1, 23, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 10L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 23, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 23, 17, 34, 9, 950, DateTimeKind.Utc), "Vye3cvHXEauyJR2QQWfBA", new DateTime(2018, 1, 23, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 11L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 23, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 23, 17, 34, 9, 950, DateTimeKind.Utc), "DoNHjy6m5Eej15jntdswiw", new DateTime(2018, 1, 23, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 12L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 24, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 24, 17, 34, 9, 950, DateTimeKind.Utc), "jpEXOehPH0KYS0G6ilhAnA", new DateTime(2018, 1, 24, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 13L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 24, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 24, 17, 34, 9, 950, DateTimeKind.Utc), "7OKxDv3ouUSCmeMsScxQ5Q", new DateTime(2018, 1, 24, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 14L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 24, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 24, 17, 34, 9, 950, DateTimeKind.Utc), "Ijh2cG5YL0qkwJKmBNgDw", new DateTime(2018, 1, 24, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 15L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 24, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 24, 17, 34, 9, 950, DateTimeKind.Utc), "9mMSllohb0OlkxxUaM7w", new DateTime(2018, 1, 24, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 16L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 25, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 25, 17, 34, 9, 950, DateTimeKind.Utc), "L4S9oGHBBkGPtxm0luW5A", new DateTime(2018, 1, 25, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 17L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 25, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 25, 17, 34, 9, 950, DateTimeKind.Utc), "Yj0DrXV54UKlWSDehJ5KYw", new DateTime(2018, 1, 25, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 18L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 25, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 25, 17, 34, 9, 950, DateTimeKind.Utc), "CMzClkA2wEihlWiiramvKQ", new DateTime(2018, 1, 25, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 19L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 25, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 25, 17, 34, 9, 950, DateTimeKind.Utc), "wS7SpQrhiUmtEQNllEqTug", new DateTime(2018, 1, 25, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 20L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 26, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 26, 17, 34, 9, 950, DateTimeKind.Utc), "1b8nCjPUmUSUKlHT7xkXCw", new DateTime(2018, 1, 26, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 21L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 26, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 26, 17, 34, 9, 950, DateTimeKind.Utc), "ov3064EEIEGXvwr6O9Uh0A", new DateTime(2018, 1, 26, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 22L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 26, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 26, 17, 34, 9, 950, DateTimeKind.Utc), "bFmOit49UOShzddsz55Fg", new DateTime(2018, 1, 26, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 23L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 26, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 26, 17, 34, 9, 950, DateTimeKind.Utc), "32mDm8rUgE2RluNPqzqsgA", new DateTime(2018, 1, 26, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 24L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 27, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 27, 17, 34, 9, 950, DateTimeKind.Utc), "gWkkK95k00GFrSoR0G0F8g", new DateTime(2018, 1, 27, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 25L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 27, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 27, 17, 34, 9, 950, DateTimeKind.Utc), "T1MhsRwr40aceqvIppbiw", new DateTime(2018, 1, 27, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 26L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 27, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 27, 17, 34, 9, 950, DateTimeKind.Utc), "2Uns0sIqVEeXMXqp2XLHkA", new DateTime(2018, 1, 27, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 27L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 27, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 27, 17, 34, 9, 950, DateTimeKind.Utc), "XCutOiN9UEuQ2HL7JFHCoA", new DateTime(2018, 1, 27, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 28L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 28, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 28, 17, 34, 9, 950, DateTimeKind.Utc), "hWpo9SDnUChEIV0t38uBw", new DateTime(2018, 1, 28, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 29L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 28, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 28, 17, 34, 9, 950, DateTimeKind.Utc), "mKDrAHteJ0erZDN8rRbfxQ", new DateTime(2018, 1, 28, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 30L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 28, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 28, 17, 34, 9, 950, DateTimeKind.Utc), "bpMZ0G2FUaRJ5mSTvhqA", new DateTime(2018, 1, 28, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 31L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 28, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 28, 17, 34, 9, 950, DateTimeKind.Utc), "Pv78xu9skiIK64ETXbGg", new DateTime(2018, 1, 28, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 32L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 29, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 29, 17, 34, 9, 950, DateTimeKind.Utc), "i1jM7mht7UWGVcRg7zlrA", new DateTime(2018, 1, 29, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 33L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 29, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 29, 17, 34, 9, 950, DateTimeKind.Utc), "ZA4yT4GaIkO2ht6o7ZDGA", new DateTime(2018, 1, 29, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 34L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 29, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 29, 17, 34, 9, 950, DateTimeKind.Utc), "f57vJCANjkqRBz34Yzp6hA", new DateTime(2018, 1, 29, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 35L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 29, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 29, 17, 34, 9, 950, DateTimeKind.Utc), "oHhAozdD0iTea7890zNsw", new DateTime(2018, 1, 29, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 36L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 30, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 30, 17, 34, 9, 950, DateTimeKind.Utc), "bLxCg90hXUapYpYYdyDOIw", new DateTime(2018, 1, 30, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 37L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 30, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 30, 17, 34, 9, 950, DateTimeKind.Utc), "WlTCuFdIf0Onwiv2WV347w", new DateTime(2018, 1, 30, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 38L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 30, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 30, 17, 34, 9, 950, DateTimeKind.Utc), "7qrHbSKLNEiGtQtNOSGiZg", new DateTime(2018, 1, 30, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 39L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 30, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 30, 17, 34, 9, 950, DateTimeKind.Utc), "6FV7DEOiOEar0iiLLneFQ", new DateTime(2018, 1, 30, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 40L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 31, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 31, 17, 34, 9, 950, DateTimeKind.Utc), "xXKBEbZiMEGgQAvm2bTg", new DateTime(2018, 1, 31, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 41L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 31, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 31, 17, 34, 9, 950, DateTimeKind.Utc), "G1qoFbL4AEOCBiFNew43SA", new DateTime(2018, 1, 31, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 42L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 31, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 31, 17, 34, 9, 950, DateTimeKind.Utc), "PPhfXOsSpkyYEyAOKE2DBQ", new DateTime(2018, 1, 31, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 43L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 1, 31, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 1, 31, 17, 34, 9, 950, DateTimeKind.Utc), "YiseTUwqzEuP9xmne8a5hg", new DateTime(2018, 1, 31, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 44L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 1, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 1, 17, 34, 9, 950, DateTimeKind.Utc), "IK7nc4FTkmvIf9F7r43MA", new DateTime(2018, 2, 1, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 45L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 1, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 1, 17, 34, 9, 950, DateTimeKind.Utc), "feO3N9NDkWe8BU4GRabzQ", new DateTime(2018, 2, 1, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 46L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 1, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 1, 17, 34, 9, 950, DateTimeKind.Utc), "7fCVQqT7SUSuZpAgvOrgw", new DateTime(2018, 2, 1, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 47L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 1, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 1, 17, 34, 9, 950, DateTimeKind.Utc), "gWWkjcaEmEyRcoAtPtAWeQ", new DateTime(2018, 2, 1, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 48L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 2, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 2, 17, 34, 9, 950, DateTimeKind.Utc), "gXjTTPkMS0SqdFwBDBYZig", new DateTime(2018, 2, 2, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 49L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 2, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 2, 17, 34, 9, 950, DateTimeKind.Utc), "X1Pxl0AgkEOc8rwfKd1NQ", new DateTime(2018, 2, 2, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 50L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 2, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 2, 17, 34, 9, 950, DateTimeKind.Utc), "RoTpzDOCUesRnaYOEvuA", new DateTime(2018, 2, 2, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 51L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 2, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 2, 17, 34, 9, 950, DateTimeKind.Utc), "MBu53NuOE6QGPGh8Qhgvw", new DateTime(2018, 2, 2, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 52L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 3, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 3, 17, 34, 9, 950, DateTimeKind.Utc), "eyNQJzFdkOubfxVxAaDHA", new DateTime(2018, 2, 3, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 53L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 3, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 3, 17, 34, 9, 950, DateTimeKind.Utc), "FzqGnVyQDk6Kdw1nvI5Q9w", new DateTime(2018, 2, 3, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 54L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 3, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 3, 17, 34, 9, 950, DateTimeKind.Utc), "uxMNyRzklkCJmSHDb8fUvA", new DateTime(2018, 2, 3, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 55L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 3, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 3, 17, 34, 9, 950, DateTimeKind.Utc), "PdBdimxJEqcFANUw3kg", new DateTime(2018, 2, 3, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 56L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 4, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 4, 17, 34, 9, 950, DateTimeKind.Utc), "IMwANjlyoE2SnaRuORXxg", new DateTime(2018, 2, 4, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 57L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 4, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 4, 17, 34, 9, 950, DateTimeKind.Utc), "XvcdSXLElUKWQtiZTw5Q", new DateTime(2018, 2, 4, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 58L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 4, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 4, 17, 34, 9, 950, DateTimeKind.Utc), "H4Ioj00r0GKRiYaCvYVGQ", new DateTime(2018, 2, 4, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 59L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 4, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 4, 17, 34, 9, 950, DateTimeKind.Utc), "tFD9yh7ifkSt0DRYaJiQ", new DateTime(2018, 2, 4, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 60L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 5, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 5, 17, 34, 9, 950, DateTimeKind.Utc), "lkDO9aNI9EW1jMq98P2GtQ", new DateTime(2018, 2, 5, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 61L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 5, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 5, 17, 34, 9, 950, DateTimeKind.Utc), "0gcOrsvDUuklwW7xTCMvA", new DateTime(2018, 2, 5, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 62L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 5, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 5, 17, 34, 9, 950, DateTimeKind.Utc), "5a1NNedoqk6Lmg8Hm52jGQ", new DateTime(2018, 2, 5, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 63L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 5, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 5, 17, 34, 9, 950, DateTimeKind.Utc), "vO9376hgkiBzhTet6Q0w", new DateTime(2018, 2, 5, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 64L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 6, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 6, 17, 34, 9, 950, DateTimeKind.Utc), "UTY59RxkHUyxM45p24NLEw", new DateTime(2018, 2, 6, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 65L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 6, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 6, 17, 34, 9, 950, DateTimeKind.Utc), "cv52YOALQ0aVhFYzrSUz5g", new DateTime(2018, 2, 6, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 66L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 6, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 6, 17, 34, 9, 950, DateTimeKind.Utc), "bLIhT1jsOkiBVPs1P78LnA", new DateTime(2018, 2, 6, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 67L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 6, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 6, 17, 34, 9, 950, DateTimeKind.Utc), "Feql3EkRw0GkMhwLa5X1aQ", new DateTime(2018, 2, 6, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 68L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 7, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 7, 17, 34, 9, 950, DateTimeKind.Utc), "lOA5SdmNfUy5BRndSOnetg", new DateTime(2018, 2, 7, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 69L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 7, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 7, 17, 34, 9, 950, DateTimeKind.Utc), "wwPMXdk0aB0a36rcEWw", new DateTime(2018, 2, 7, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 70L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 7, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 7, 17, 34, 9, 950, DateTimeKind.Utc), "NnToNXtl90C56NNXzh6sjQ", new DateTime(2018, 2, 7, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 71L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 7, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 7, 17, 34, 9, 950, DateTimeKind.Utc), "VjjxPc6kJka3qBjqUJ21tw", new DateTime(2018, 2, 7, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 72L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 8, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 8, 17, 34, 9, 950, DateTimeKind.Utc), "mjcFnO4xU65HUSc5V6tQ", new DateTime(2018, 2, 8, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 73L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 8, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 8, 17, 34, 9, 950, DateTimeKind.Utc), "hfLu3Q8m7U2yqgV2MLPHOA", new DateTime(2018, 2, 8, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 74L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 8, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 8, 17, 34, 9, 950, DateTimeKind.Utc), "ewaiWHv2U2fe8wmlLQ1DQ", new DateTime(2018, 2, 8, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 75L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 8, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 8, 17, 34, 9, 950, DateTimeKind.Utc), "Hvtcki3DC0SH6ilBLV5heQ", new DateTime(2018, 2, 8, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 76L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 9, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 9, 17, 34, 9, 950, DateTimeKind.Utc), "sfIGskJCYEyKRRTrekB6xg", new DateTime(2018, 2, 9, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 77L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 9, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 9, 17, 34, 9, 950, DateTimeKind.Utc), "jn7j8xnj0ulKotabrZoww", new DateTime(2018, 2, 9, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 78L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 9, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 9, 17, 34, 9, 950, DateTimeKind.Utc), "uF7nPlSRvUu1IPdV7MK6Q", new DateTime(2018, 2, 9, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 79L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 9, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 9, 17, 34, 9, 950, DateTimeKind.Utc), "5uLVjyYyxUSHs9wIEDdaw", new DateTime(2018, 2, 9, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 80L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 10, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 10, 17, 34, 9, 950, DateTimeKind.Utc), "WhZetMVLRECfREaX1Xcc7g", new DateTime(2018, 2, 10, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 81L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 10, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 10, 17, 34, 9, 950, DateTimeKind.Utc), "2rlQNc45o0mtIzOq0eb8nw", new DateTime(2018, 2, 10, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 82L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 10, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 10, 17, 34, 9, 950, DateTimeKind.Utc), "um2PxBNTOEmKTK0dfjieFQ", new DateTime(2018, 2, 10, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 83L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 10, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 10, 17, 34, 9, 950, DateTimeKind.Utc), "oV8p80RJs0GWcsYM3CUzog", new DateTime(2018, 2, 10, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 84L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 11, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 11, 17, 34, 9, 950, DateTimeKind.Utc), "w146ZEcDP06gWPzjFYUfhw", new DateTime(2018, 2, 11, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 85L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 11, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 11, 17, 34, 9, 950, DateTimeKind.Utc), "NdJst3DU27RodE3U8gAw", new DateTime(2018, 2, 11, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 86L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 11, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 11, 17, 34, 9, 950, DateTimeKind.Utc), "qFARXhArOkqwbRZEx3kavg", new DateTime(2018, 2, 11, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 87L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 11, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 11, 17, 34, 9, 950, DateTimeKind.Utc), "mCw9a7vQ5UqgN54BKSZybg", new DateTime(2018, 2, 11, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 88L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 12, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 12, 17, 34, 9, 950, DateTimeKind.Utc), "7o9mZZ04cUGgghrdpW8lpw", new DateTime(2018, 2, 12, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 89L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 12, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 12, 17, 34, 9, 950, DateTimeKind.Utc), "GEy908ehSUSlFm7K1mXJqg", new DateTime(2018, 2, 12, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 90L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 12, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 12, 17, 34, 9, 950, DateTimeKind.Utc), "TjJTomJ0EGxVmwC6w9fgg", new DateTime(2018, 2, 12, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 91L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 12, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 12, 17, 34, 9, 950, DateTimeKind.Utc), "AFzaQlcCF0uHRlRmckpDRQ", new DateTime(2018, 2, 12, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 92L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 13, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 13, 17, 34, 9, 950, DateTimeKind.Utc), "PtrPZfzcNUyGpoqImrYPSg", new DateTime(2018, 2, 13, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 93L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 13, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 13, 17, 34, 9, 950, DateTimeKind.Utc), "H5OqVjbmKEm26YAVpEH5QQ", new DateTime(2018, 2, 13, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 94L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 13, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 13, 17, 34, 9, 950, DateTimeKind.Utc), "u3yZvkK5q0O0J8QkuDYLHQ", new DateTime(2018, 2, 13, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 95L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 13, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 13, 17, 34, 9, 950, DateTimeKind.Utc), "zvKCyqm1SEKqjd8KLYQh6Q", new DateTime(2018, 2, 13, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 96L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 14, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 14, 17, 34, 9, 950, DateTimeKind.Utc), "iulVIcUbj02rJ56REBGaTQ", new DateTime(2018, 2, 14, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 97L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 14, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 14, 17, 34, 9, 950, DateTimeKind.Utc), "f3tMBism0iHder5DK8qQ", new DateTime(2018, 2, 14, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 98L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 14, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 14, 17, 34, 9, 950, DateTimeKind.Utc), "EK8sqidSvkGQpNmfy0bPOw", new DateTime(2018, 2, 14, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 99L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 14, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 14, 17, 34, 9, 950, DateTimeKind.Utc), "jM35w0vPEUCKvlMWxt2dOA", new DateTime(2018, 2, 14, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 100L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 15, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 15, 17, 34, 9, 950, DateTimeKind.Utc), "Nz6Q20NQrEOP1Ec5DdEFQ", new DateTime(2018, 2, 15, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 101L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 15, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 15, 17, 34, 9, 950, DateTimeKind.Utc), "BpuSHPrlZUqcxiFncbrysQ", new DateTime(2018, 2, 15, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 102L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 15, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 15, 17, 34, 9, 950, DateTimeKind.Utc), "IjCd6Huj9kWJVQLCWg3lTg", new DateTime(2018, 2, 15, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 103L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 15, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 15, 17, 34, 9, 950, DateTimeKind.Utc), "eODU8gUAZkmucdbu6MNiQ", new DateTime(2018, 2, 15, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 104L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 16, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 16, 17, 34, 9, 950, DateTimeKind.Utc), "i1NbGPrWvkmbjMDq5XKJg", new DateTime(2018, 2, 16, 17, 34, 9, 950, DateTimeKind.Utc) });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 105L,
                columns: new[] { "Created", "Date", "Title", "Updated" },
                values: new object[] { new DateTime(2018, 2, 16, 17, 34, 9, 950, DateTimeKind.Utc), new DateTime(2018, 2, 16, 17, 34, 9, 950, DateTimeKind.Utc), "ziTzDvFxkWdAsnJUccA", new DateTime(2018, 2, 16, 17, 34, 9, 950, DateTimeKind.Utc) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Created",
                table: "SampleThings");

            migrationBuilder.DropColumn(
                name: "Updated",
                table: "SampleThings");

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 1L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 20, 19, 13, 53, 372, DateTimeKind.Utc), "Y2EsQfiC0CXUeh1cI9EhA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 2L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 20, 19, 13, 53, 372, DateTimeKind.Utc), "0ST72ExFyESISPdO4hA2Vw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 3L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 20, 19, 13, 53, 372, DateTimeKind.Utc), "iiiBLqmEY0GnKqSKGdLJbw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 4L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 21, 19, 13, 53, 372, DateTimeKind.Utc), "88ePGKJY6ke5tkunJ7unA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 5L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 21, 19, 13, 53, 372, DateTimeKind.Utc), "HjG7MllOeU2jtQhxYLewzw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 6L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 21, 19, 13, 53, 372, DateTimeKind.Utc), "YZ2Ta1E3akC3xzaaTs5yTw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 7L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 21, 19, 13, 53, 372, DateTimeKind.Utc), "hkjpeQQv80O0Z87TLAJeaA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 8L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 22, 19, 13, 53, 372, DateTimeKind.Utc), "YXT8HXrokkutB5mTmpxNWA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 9L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 22, 19, 13, 53, 372, DateTimeKind.Utc), "xPT2gELD30mbpOmPszSuFQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 10L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 22, 19, 13, 53, 372, DateTimeKind.Utc), "CIn5mRyVQUOvZBk9huHcg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 11L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 22, 19, 13, 53, 372, DateTimeKind.Utc), "i8GTJMNfa0ivQtTxgmEcWw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 12L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 23, 19, 13, 53, 372, DateTimeKind.Utc), "cu6M9tG2NESPc8lzms58Q" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 13L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 23, 19, 13, 53, 372, DateTimeKind.Utc), "En0fFNI0hkuZc5OPb2XphA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 14L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 23, 19, 13, 53, 372, DateTimeKind.Utc), "ni1MJp5B5EGDws9bBfjjA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 15L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 23, 19, 13, 53, 372, DateTimeKind.Utc), "GWQ9kpNyUyG73cjkmrdHQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 16L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 24, 19, 13, 53, 372, DateTimeKind.Utc), "cWEg9VlSrEWibxNj1BQAA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 17L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 24, 19, 13, 53, 372, DateTimeKind.Utc), "rAhnJDbZAEKx0HBNWSzyA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 18L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 24, 19, 13, 53, 372, DateTimeKind.Utc), "uyldseIXOkH1tqtjBrEw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 19L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 24, 19, 13, 53, 372, DateTimeKind.Utc), "50s0Khqqf0y0mhzb6PFZ7w" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 20L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 25, 19, 13, 53, 372, DateTimeKind.Utc), "QlZ9A2fgdUmth9cCwwjQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 21L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 25, 19, 13, 53, 372, DateTimeKind.Utc), "Q4GHN3oZUO0cUUryAWO7w" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 22L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 25, 19, 13, 53, 372, DateTimeKind.Utc), "wZ7eTZk68kmCJLVR7I5POg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 23L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 25, 19, 13, 53, 372, DateTimeKind.Utc), "VLeUeqOB506XKNT62Ctctg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 24L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 26, 19, 13, 53, 372, DateTimeKind.Utc), "2vRITIewBkmHC2ot57jaQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 25L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 26, 19, 13, 53, 372, DateTimeKind.Utc), "WmI5ajackEuHs4pUJX14A" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 26L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 26, 19, 13, 53, 372, DateTimeKind.Utc), "zJblTz0JTEyP5CIYdriDQA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 27L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 26, 19, 13, 53, 372, DateTimeKind.Utc), "8QdoCfHoUetJfhETa2yvw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 28L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 27, 19, 13, 53, 372, DateTimeKind.Utc), "nmviBUScLUm5D0fGO2oYhg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 29L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 27, 19, 13, 53, 372, DateTimeKind.Utc), "mVRy7qEDrUey2ByMr9Siw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 30L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 27, 19, 13, 53, 372, DateTimeKind.Utc), "3Pl2lArpUKD2i9iKu7Oew" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 31L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 27, 19, 13, 53, 372, DateTimeKind.Utc), "SmxVIjd4cke7tUSfKclQoA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 32L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 28, 19, 13, 53, 372, DateTimeKind.Utc), "W5A2nnDZUqxgls4qJnaw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 33L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 28, 19, 13, 53, 372, DateTimeKind.Utc), "bimnT2y7PEGoEkWhkCefpQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 34L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 28, 19, 13, 53, 372, DateTimeKind.Utc), "eFPG3l8WvEqEB77bvzKw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 35L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 28, 19, 13, 53, 372, DateTimeKind.Utc), "qK6im5PhdEK2YmPaa2M0TA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 36L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 29, 19, 13, 53, 372, DateTimeKind.Utc), "veHDHCeo0yHLm1Uf8m9Hg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 37L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 29, 19, 13, 53, 372, DateTimeKind.Utc), "GHDM0iQiZ0yGQVt7zcVuQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 38L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 29, 19, 13, 53, 372, DateTimeKind.Utc), "jGsoOtSBw02kTKB3EWigw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 39L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 29, 19, 13, 53, 372, DateTimeKind.Utc), "bbOCvnxozUGFGcHemCHIfg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 40L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 30, 19, 13, 53, 372, DateTimeKind.Utc), "NsdHCP8Z1E669SCAWY9IVg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 41L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 30, 19, 13, 53, 372, DateTimeKind.Utc), "QIb8G0swmUq1Z8vMctoiw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 42L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 30, 19, 13, 53, 372, DateTimeKind.Utc), "PD01giAm06ySsjV79GjtA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 43L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 30, 19, 13, 53, 372, DateTimeKind.Utc), "DGiforG20E23ROr8N2jgw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 44L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 31, 19, 13, 53, 372, DateTimeKind.Utc), "QN7GgBqINE6oOZRyjSKoDQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 45L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 31, 19, 13, 53, 372, DateTimeKind.Utc), "wkGu8R3CpkK5jeadwjgHSw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 46L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 31, 19, 13, 53, 372, DateTimeKind.Utc), "81iJIeVWyUt8kHRytxGg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 47L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 1, 31, 19, 13, 53, 372, DateTimeKind.Utc), "dPedwoQ5vEqnfi0XGfZDw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 48L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 1, 19, 13, 53, 372, DateTimeKind.Utc), "ARICfTuoykC0h6AYZvMiZw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 49L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 1, 19, 13, 53, 372, DateTimeKind.Utc), "XqS4Lc39zk6nCJvfviZ4w" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 50L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 1, 19, 13, 53, 372, DateTimeKind.Utc), "WEm67Wwko0qpw87XEHkp1g" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 51L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 1, 19, 13, 53, 372, DateTimeKind.Utc), "4i9IgsDdJUS3cvTU6Ew2uQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 52L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 2, 19, 13, 53, 372, DateTimeKind.Utc), "dKddpJQp5U65rllB1GhiyA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 53L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 2, 19, 13, 53, 372, DateTimeKind.Utc), "6lpWNnShk6uwX320imIpw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 54L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 2, 19, 13, 53, 372, DateTimeKind.Utc), "J01ZG3ld0yyyX04WNo2TQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 55L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 2, 19, 13, 53, 372, DateTimeKind.Utc), "W160HxpWqE6WhcAWBgdOwA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 56L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 3, 19, 13, 53, 372, DateTimeKind.Utc), "5lvJijIUH0KP2s5odk0ABg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 57L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 3, 19, 13, 53, 372, DateTimeKind.Utc), "P2P4GtPGWEyuY10zVBNCjA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 58L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 3, 19, 13, 53, 372, DateTimeKind.Utc), "V2iMIgSPRUEOAsiQ2J4Jg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 59L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 3, 19, 13, 53, 372, DateTimeKind.Utc), "qhqdbpBnUm6Ekpq58pKQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 60L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 4, 19, 13, 53, 372, DateTimeKind.Utc), "zxfkYn9Ex0iCTFqQ6miVg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 61L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 4, 19, 13, 53, 372, DateTimeKind.Utc), "CPgg5I9IXkKuO8jaCzv0XQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 62L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 4, 19, 13, 53, 372, DateTimeKind.Utc), "rqt4PoNOUq5PnKhQ5g6YQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 63L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 4, 19, 13, 53, 372, DateTimeKind.Utc), "S4ndcY7Z4Ueu8ZXZ2duaoA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 64L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 5, 19, 13, 53, 372, DateTimeKind.Utc), "BWDxQqnlU0q8ZVEXNWwGgg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 65L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 5, 19, 13, 53, 372, DateTimeKind.Utc), "iuE9PYaygEWOuP5MOxdQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 66L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 5, 19, 13, 53, 372, DateTimeKind.Utc), "KCi2LVNckiMks8L3afWlQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 67L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 5, 19, 13, 53, 372, DateTimeKind.Utc), "UdUVTfF7skShEOBgsmenEw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 68L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 6, 19, 13, 53, 372, DateTimeKind.Utc), "Bk5qg6cMqk2N6B9Gf2ewiw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 69L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 6, 19, 13, 53, 372, DateTimeKind.Utc), "hrNLFCssp0GejxJfl9KpDA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 70L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 6, 19, 13, 53, 372, DateTimeKind.Utc), "Z0sgmed1lUmeeAHTemHgw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 71L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 6, 19, 13, 53, 372, DateTimeKind.Utc), "JHGg1IFocEynXGRSOE4QA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 72L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 7, 19, 13, 53, 372, DateTimeKind.Utc), "LA0baSz3UqAHOgGOjTLA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 73L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 7, 19, 13, 53, 372, DateTimeKind.Utc), "YUvyUrfrP0e5RvVoaKKOQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 74L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 7, 19, 13, 53, 372, DateTimeKind.Utc), "iXY2m8SmVU2bLkmfpZmgVA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 75L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 7, 19, 13, 53, 372, DateTimeKind.Utc), "pOvuiTvzE0m5VxIXwlnwqA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 76L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 8, 19, 13, 53, 372, DateTimeKind.Utc), "kmSG7xfNkGUCYRmFlKtxQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 77L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 8, 19, 13, 53, 372, DateTimeKind.Utc), "7bAgfOYkCS6ESmFfvOxQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 78L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 8, 19, 13, 53, 372, DateTimeKind.Utc), "9qfgqZs2o0G6H4UCQMBhg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 79L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 8, 19, 13, 53, 372, DateTimeKind.Utc), "sUL1elJLo0KKwp5n8nSeNg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 80L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 9, 19, 13, 53, 372, DateTimeKind.Utc), "Ees9oupUuAX91FILCRIg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 81L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 9, 19, 13, 53, 372, DateTimeKind.Utc), "BjW8lYbLkGoZsPcgeRVLA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 82L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 9, 19, 13, 53, 372, DateTimeKind.Utc), "sHCQRAGKhU6pTTqL7o5hQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 83L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 9, 19, 13, 53, 372, DateTimeKind.Utc), "aoQLY9IzeUOhW81M7IFAsg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 84L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 10, 19, 13, 53, 372, DateTimeKind.Utc), "uebMGUXhZ0qCt9aZvaLJ8g" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 85L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 10, 19, 13, 53, 372, DateTimeKind.Utc), "UD98CwWWkCfY99Je1vg9A" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 86L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 10, 19, 13, 53, 372, DateTimeKind.Utc), "TC17ZqdLJUi4Ein1R6ZoSw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 87L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 10, 19, 13, 53, 372, DateTimeKind.Utc), "TW68tpYREaOaM7EcKDKmg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 88L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 11, 19, 13, 53, 372, DateTimeKind.Utc), "gAc5644b0u22J1vjZDOoA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 89L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 11, 19, 13, 53, 372, DateTimeKind.Utc), "XpoGMgDKkSquNdPJ79YDg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 90L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 11, 19, 13, 53, 372, DateTimeKind.Utc), "lfnv1NLJdUGdoazaOnAEjw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 91L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 11, 19, 13, 53, 372, DateTimeKind.Utc), "RlXhqixwUOJPQ42gVa39A" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 92L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 12, 19, 13, 53, 372, DateTimeKind.Utc), "PF8PmVT2oUWkCjE9PidVg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 93L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 12, 19, 13, 53, 372, DateTimeKind.Utc), "qQPlsPz8LUy8KYx3l8xaQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 94L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 12, 19, 13, 53, 372, DateTimeKind.Utc), "68sf63yhmUOHxjQ56n2oMw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 95L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 12, 19, 13, 53, 372, DateTimeKind.Utc), "oZBkqBshkkaidlcFk154w" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 96L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 13, 19, 13, 53, 372, DateTimeKind.Utc), "aInxqvJrEaP7Hm4x2BDmg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 97L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 13, 19, 13, 53, 372, DateTimeKind.Utc), "WgpASltHEKtZKJtw8F2pg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 98L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 13, 19, 13, 53, 372, DateTimeKind.Utc), "2Zh5kFY2fE2QLrQseNbcsw" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 99L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 13, 19, 13, 53, 372, DateTimeKind.Utc), "LymkGIGdE0WceX1HFYV6A" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 100L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 14, 19, 13, 53, 372, DateTimeKind.Utc), "vgHlFPxLyUmqVr22M9GtA" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 101L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 14, 19, 13, 53, 372, DateTimeKind.Utc), "hKWOUGfHUKGtgHNfuVbWg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 102L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 14, 19, 13, 53, 372, DateTimeKind.Utc), "Nt9git6woUyo6oOdodZIpg" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 103L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 14, 19, 13, 53, 372, DateTimeKind.Utc), "FzdVcTzkpkew6CEhvRs6CQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 104L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 15, 19, 13, 53, 372, DateTimeKind.Utc), "wpqBiuUDu0i23Zyy1ismIQ" });

            migrationBuilder.UpdateData(
                table: "SampleThings",
                keyColumn: "Id",
                keyValue: 105L,
                columns: new[] { "Date", "Title" },
                values: new object[] { new DateTime(2018, 2, 15, 19, 13, 53, 372, DateTimeKind.Utc), "45MRwnWDPEmVUCsED3VBeg" });
        }
    }
}
