# Deploy Optiq IQ — download official brand SVG icons
# Run this script in Windows PowerShell from your project root.
# Output: public\images\technologies\ and Deploy_Optiq_Technologies_Original_Logos.zip

$ErrorActionPreference = "Continue"
$target = Join-Path (Get-Location) "public\images\technologies"
New-Item -ItemType Directory -Force -Path $target | Out-Null

$items = @(
  "ai","amazon-web-services","android","angular","api","asp-net","azure",
  "blockchain","c","c-sharp","cplusplus","cardano","chaos","claude","openai",
  "githubcopilot","cryptocurrency","cursor","dart","django","docker","drupal",
  "elasticsearch","elixir","express","firebase","flutter","googlegemini",
  "generativeai","googleanalytics","github","go","googlecloud","grails","graphql",
  "html5","hubspot","ionic","apple","iot","java","javascript","apachekafka",
  "kotlin","kubernetes","laravel","llm","magento","mongodb","mulesoft","mysql",
  "dotnet","nodedotjs","nosql","objectivec","ollama","oracle","perl","php",
  "postgresql","pwa","python","react","reactnative","redhatopenshift","replit",
  "ruby","rubyonrails","rust","saas","salesforce","sap","scala","selenium",
  "servicenow","microsoftsharepoint","shopify","spring","microsoftsqlserver",
  "swift","symfony","tableau","typescript","unity","vuedotjs","windsurf",
  "wordpress","xamarin","forcepoint","jira","jquery","linux","powerbi"
)

$ok = @()
$missing = @()
foreach ($slug in $items) {
  $url = "https://cdn.simpleicons.org/$slug"
  $path = Join-Path $target "$slug.svg"
  try {
    Invoke-WebRequest -Uri $url -OutFile $path -TimeoutSec 20 -UseBasicParsing
    $content = Get-Content -Raw $path
    if ($content -match "<svg") {
      $ok += $slug
    } else {
      Remove-Item $path -Force
      $missing += $slug
    }
  } catch {
    if (Test-Path $path) { Remove-Item $path -Force }
    $missing += $slug
  }
}

$report = @()
$report += "DEPLOY OPTIQ IQ - ORIGINAL BRAND SVG DOWNLOAD REPORT"
$report += "Downloaded: $($ok.Count)"
$report += "Unavailable: $($missing.Count)"
$report += ""
$report += "Downloaded files:"
$report += $ok
$report += ""
$report += "Not available from Simple Icons:"
$report += $missing
$report | Set-Content -Encoding UTF8 (Join-Path $target "DOWNLOAD-REPORT.txt")

# Copy generated bottom section image if it is in Downloads or project root.
$possible = @(
  (Join-Path $HOME "Downloads\a_bright_modern_open_plan_office_tech_workspace_wi.png"),
  (Join-Path (Get-Location) "a_bright_modern_open_plan_office_tech_workspace_wi.png")
)
foreach ($p in $possible) {
  if (Test-Path $p) {
    Copy-Item $p (Join-Path $target "stopped-counting.png") -Force
    break
  }
}

$zip = Join-Path (Get-Location) "Deploy_Optiq_Technologies_Original_Logos.zip"
if (Test-Path $zip) { Remove-Item $zip -Force }
Compress-Archive -Path (Join-Path $target "*") -DestinationPath $zip -Force

Write-Host ""
Write-Host "Finished. Downloaded $($ok.Count) SVG icons; $($missing.Count) unavailable."
Write-Host "Folder: $target"
Write-Host "ZIP: $zip"
Write-Host ""
Write-Host "IMPORTANT: Simple Icons contains brand symbols, not guaranteed full wordmarks."
Write-Host "Read the Simple Icons legal disclaimer and each brand trademark rules."
