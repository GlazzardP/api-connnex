import client from "prom-client";

const prometheusMetrics = async () => {
  const defaultMetrics = client.collectDefaultMetrics;
  defaultMetrics();
  const result = await client.register.metrics();
  return result;
};

export { prometheusMetrics };
