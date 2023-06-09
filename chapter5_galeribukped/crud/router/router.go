package router

import (
	belajarRoutes "belajar-golang/internal/routes/belajar"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api", logger.New())

	// Setup the Node Routes
	belajarRoutes.SetupBelajarRoutes(api)
}
