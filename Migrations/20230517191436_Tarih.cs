using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetodev.Migrations
{
    /// <inheritdoc />
    public partial class Tarih : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Tarih",
                table: "EntityNames",
                type: "datetime2",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Tarih",
                table: "EntityNames");
        }
    }
}
