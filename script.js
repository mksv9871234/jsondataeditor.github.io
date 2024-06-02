function convertToJson() {
    const brand = document.getElementById('brand').value;
    const name = document.getElementById('name').value;
    const amazonLink = document.getElementById('amazonLink').value;
    const status = document.getElementById('status').value;
    const launchDate = document.getElementById('launchDate').value;
    const imageSrc = document.getElementById('imageSrc').value;
    const photoCount = document.getElementById('photoCount').value;
    const processor = document.getElementById('processor').value;
    const CPU = document.getElementById('CPU').value;
    const Architecture = document.getElementById('Architecture').value;
    const Graphics = document.getElementById('Graphics').value;
    const ram = document.getElementById('ram').value;
    const OS = document.getElementById('OS').value;
    const Positioning = document.getElementById('Positioning').value;
    const display = document.getElementById('display').value;
    const displaytype = document.getElementById('displaytype').value;
    const Resolution = document.getElementById('Resolution').value;
    const pixeldencity = document.getElementById('PixelDensity').value;
    const rearcamera = document.getElementById('rearCamera').value;
    const rearcamerafeatures = document.getElementById('rearCameraFeatures').value;
    const rearcameravideo = document.getElementById('rearCameraVideo').value;
    const frontcamera = document.getElementById('frontCamera').value;
    const frontcameravideo = document.getElementById('FrontCameraVideo').value;
    const frontcamerafeatures = document.getElementById('FrontCameraFeatures').value;
    const battery = document.getElementById('battery').value;
    const charging = document.getElementById('charging').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const color = document.getElementById('color').value;
    const build = document.getElementById('build').value;
    const loudspeaker = document.getElementById('Loudspeaker').value;
    const wireheadphone = document.getElementById('WireHeadphoneJack').value;
    const batterytype = document.getElementById('batterytype').value;
    const storage = document.getElementById('storage').value;
    const expandablememory = document.getElementById('ExpandableMemory').value;
    const cardslot = document.getElementById('CardSlot').value;
    const simslot = document.getElementById('SIMslot').value;
    const simsize = document.getElementById('SIMsize').value;
    const networksupport = document.getElementById('NetworkSupport').value;
    const volte = document.getElementById('VOLTE').value;
    const wifi = document.getElementById('wifi').value;
    const bluetooth = document.getElementById('Bluetooth').value;
    const GPS = document.getElementById('GPS').value;
    const NFC = document.getElementById('NFC').value;
    const USB = document.getElementById('USB').value;
    const sensors = document.getElementById('sensors').value;
    const performance = document.getElementById('Performance').value;
    const displayperformance = document.getElementById('displayPerformance').value;
    const loudspeakerperformance = document.getElementById('LoudspeakerPerformance').value;
    const batteryperformance = document.getElementById('BatteryPerformance').value;
    const price = document.getElementById('price').value;
    const id = document.getElementById('id').value;






    const data = {
        "brand": brand,
        "name": name,
        "status": status,
        "amazonLink": amazonLink,
        "launchDate": launchDate,
        "imageSrc": imageSrc,
        "photoCount": photoCount,
        "processor": processor,
        "CPU": CPU,
        "Architecture": Architecture,
        "Graphics": Graphics,
        "ram": ram,
        "OS": OS,
        "display": display,
        "displaytype": displaytype,
        "Resolution": Resolution,
        "pixeldencity": pixeldencity,
        "rearcamera": rearcamera,
        "rearcamerafeatures": rearcamerafeatures,
        "rearcameravideo": rearcameravideo,
        "frontcamera": frontcamera,
        "frontcameravideo": frontcameravideo,
        "frontcamerafeatures": frontcamerafeatures,
        "battery": battery,
        "charging": charging,
        "width": width,
        "height": height,
        "weight": weight,
        "color": color,
        "build": build,
        "loudspeaker": loudspeaker,
        "Positioning":Positioning,
        "wireheadphone": wireheadphone,
        "batterytype": batterytype,
        "storage": storage,
        "expandablememory": expandablememory,
        "cardslot": cardslot,
        "simslot": simslot,
        "simsize": simsize,
        "networksupport": networksupport,
        "volte": volte,
        "wifi": wifi,
        "bluetooth": bluetooth,
        "GPS": GPS,
        "NFC": NFC,
        "USB": USB,
        "sensors": sensors,
        "performance": performance,
        "displayperformance": displayperformance,
        "loudspeakerperformance": loudspeakerperformance,
        "BatteryPerformance": batteryperformance,
        "price": price,
        "id": id
      };
  
    const jsonData = JSON.stringify(data, null, 2);
    document.getElementById('jsonOutput').innerText = jsonData;
    document.getElementById('copyButton').style.display = 'block';
  }
  
  function copyJson() {
    const jsonOutput = document.getElementById('jsonOutput');
    const range = document.createRange();
    range.selectNode(jsonOutput);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
  
