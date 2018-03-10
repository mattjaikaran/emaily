function localtunnel {
  lt -s hrdvg56ygfr4tr --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
