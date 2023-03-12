import client from "prom-client";

const prometheusMetrics = async () => {
  const defaultMetrics = client.collectDefaultMetrics;
  defaultMetrics();
  const result = await client.register.metrics();

  console.log({ result });

  return result;
};

export { prometheusMetrics };
