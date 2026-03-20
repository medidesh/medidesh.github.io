import xml.etree.ElementTree as ET

tree = ET.parse('_map.svg')
root = tree.getroot()

paths = []
# Find all paths (handling namespaces)
for path in root.findall('.//{http://www.w3.org/2000/svg}path'):
    d = path.get('d')
    if d:
        paths.append(d)

tsx = """
export default function BangladeshMap({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 700 700" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
"""

for i, d in enumerate(paths):
    tsx += f'            <path d="{d}" className="stroke-medidesh-teal-500/20 fill-medidesh-teal-500/5 transition-all duration-1000 ease-in-out animate-map-pulse" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />\n'

tsx += """        </svg>
    );
}
"""

with open('src/components/landing/BangladeshMap.tsx', 'w') as f:
    f.write(tsx)

