export default async function FetchBit(url, target) {
  const bicoinhtml = document.querySelector(target);
  const request = await fetch(url);
  const response = await request.json();
  const BitCoin = +response.BRL.sell;
  bicoinhtml.innerText = `${(1000 / BitCoin).toFixed(3)}R$`;
}
