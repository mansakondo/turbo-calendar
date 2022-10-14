// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import TurboReady from 'turbo_ready'

TurboReady.initialize(Turbo.StreamActions)
