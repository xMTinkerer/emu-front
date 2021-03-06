package main

import (
	gintrace "gopkg.in/DataDog/dd-trace-go.v1/contrib/gin-gonic/gin"
	"gopkg.in/DataDog/dd-trace-go.v1/ddtrace/tracer"
   "github.com/gin-gonic/gin"
)

func main() {

	//tracer.Start(tracer.WithAnalytics(true))

   tracer.Start(tracer.WithAgentAddr("datadog-agent:8126"))
	defer tracer.Stop()

	r := gin.Default()
	
	// Use the tracer middleware with your desired service name.
	r.Use( gintrace.Middleware("emu-front") )

   r.Static("/", "./")
   r.Run(":8080") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
