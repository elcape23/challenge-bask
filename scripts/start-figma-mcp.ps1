$ErrorActionPreference = "Stop"

if (-not $env:FIGMA_API_KEY) {
  Write-Error "FIGMA_API_KEY is not set. Add it to your local environment before starting the Figma MCP server."
}

npx -y figma-developer-mcp --figma-api-key $env:FIGMA_API_KEY
