function topPlate3d_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[83,39],[83,-4.00591]]).appendArc([83.1028119,-4.0324165],{"radius":1,"clockwise":true,"large":false}).appendPoint([90.3996454,-6.3330993]).appendArc([90.672516,-6.4676642],{"radius":1,"clockwise":true,"large":false}).appendPoint([105,-16.4998765]).appendPoint([105,-14.6687146]).appendPoint([108.6089941,-17.1957595]).appendArc([109.2229331,-20.6775806],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([97.7655421,-37.0404307]).appendArc([94.2342908,-37.6188538],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([80.5068978,-27.5]).appendPoint([62,-27.5]).appendArc([59.5,-25],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([59.5,-6.5]).appendPoint([25.3078864,-6.5]).appendPoint([11.7795406,-12.2978625]).appendArc([10.7947424,-12.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-10,-12.5]).appendArc([-12.5,-10],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-12.5,44.2792408]).appendArc([-10.7905695,46.650949],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([6.3717083,52.3717083]).appendArc([7.1622777,52.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([82,52.5]).appendArc([84.5,50],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([84.5,39]).appendPoint([83,39]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[63,31.5],"radius":1})
.union(
    CAG.circle({"center":[85.5,-9],"radius":1})
).union(
    CAG.circle({"center":[13,-5.5],"radius":1})
).union(
    CAG.circle({"center":[6,45.5],"radius":1})
).union(
    new CSG.Path2D([[66,-22],[78,-22]]).appendArc([79,-21],{"radius":1,"clockwise":false,"large":false}).appendPoint([79,-9]).appendArc([78,-8],{"radius":1,"clockwise":false,"large":false}).appendPoint([66,-8]).appendArc([65,-9],{"radius":1,"clockwise":false,"large":false}).appendPoint([65,-21]).appendArc([66,-22],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[66,33],[78,33]]).appendArc([79,34],{"radius":1,"clockwise":false,"large":false}).appendPoint([79,46]).appendArc([78,47],{"radius":1,"clockwise":false,"large":false}).appendPoint([66,47]).appendArc([65,46],{"radius":1,"clockwise":false,"large":false}).appendPoint([65,34]).appendArc([66,33],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[66,16],[78,16]]).appendArc([79,17],{"radius":1,"clockwise":false,"large":false}).appendPoint([79,29]).appendArc([78,30],{"radius":1,"clockwise":false,"large":false}).appendPoint([66,30]).appendArc([65,29],{"radius":1,"clockwise":false,"large":false}).appendPoint([65,17]).appendArc([66,16],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[66,-1],[78,-1]]).appendArc([79,0],{"radius":1,"clockwise":false,"large":false}).appendPoint([79,12]).appendArc([78,13],{"radius":1,"clockwise":false,"large":false}).appendPoint([66,13]).appendArc([65,12],{"radius":1,"clockwise":false,"large":false}).appendPoint([65,0]).appendArc([66,-1],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[48,33],[60,33]]).appendArc([61,34],{"radius":1,"clockwise":false,"large":false}).appendPoint([61,46]).appendArc([60,47],{"radius":1,"clockwise":false,"large":false}).appendPoint([48,47]).appendArc([47,46],{"radius":1,"clockwise":false,"large":false}).appendPoint([47,34]).appendArc([48,33],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[48,16],[60,16]]).appendArc([61,17],{"radius":1,"clockwise":false,"large":false}).appendPoint([61,29]).appendArc([60,30],{"radius":1,"clockwise":false,"large":false}).appendPoint([48,30]).appendArc([47,29],{"radius":1,"clockwise":false,"large":false}).appendPoint([47,17]).appendArc([48,16],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[48,-1],[60,-1]]).appendArc([61,0],{"radius":1,"clockwise":false,"large":false}).appendPoint([61,12]).appendArc([60,13],{"radius":1,"clockwise":false,"large":false}).appendPoint([48,13]).appendArc([47,12],{"radius":1,"clockwise":false,"large":false}).appendPoint([47,0]).appendArc([48,-1],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[30,33],[42,33]]).appendArc([43,34],{"radius":1,"clockwise":false,"large":false}).appendPoint([43,46]).appendArc([42,47],{"radius":1,"clockwise":false,"large":false}).appendPoint([30,47]).appendArc([29,46],{"radius":1,"clockwise":false,"large":false}).appendPoint([29,34]).appendArc([30,33],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[30,16],[42,16]]).appendArc([43,17],{"radius":1,"clockwise":false,"large":false}).appendPoint([43,29]).appendArc([42,30],{"radius":1,"clockwise":false,"large":false}).appendPoint([30,30]).appendArc([29,29],{"radius":1,"clockwise":false,"large":false}).appendPoint([29,17]).appendArc([30,16],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[30,-1],[42,-1]]).appendArc([43,0],{"radius":1,"clockwise":false,"large":false}).appendPoint([43,12]).appendArc([42,13],{"radius":1,"clockwise":false,"large":false}).appendPoint([30,13]).appendArc([29,12],{"radius":1,"clockwise":false,"large":false}).appendPoint([29,0]).appendArc([30,-1],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[12,33],[24,33]]).appendArc([25,34],{"radius":1,"clockwise":false,"large":false}).appendPoint([25,46]).appendArc([24,47],{"radius":1,"clockwise":false,"large":false}).appendPoint([12,47]).appendArc([11,46],{"radius":1,"clockwise":false,"large":false}).appendPoint([11,34]).appendArc([12,33],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[12,16],[24,16]]).appendArc([25,17],{"radius":1,"clockwise":false,"large":false}).appendPoint([25,29]).appendArc([24,30],{"radius":1,"clockwise":false,"large":false}).appendPoint([12,30]).appendArc([11,29],{"radius":1,"clockwise":false,"large":false}).appendPoint([11,17]).appendArc([12,16],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[12,-1],[24,-1]]).appendArc([25,0],{"radius":1,"clockwise":false,"large":false}).appendPoint([25,12]).appendArc([24,13],{"radius":1,"clockwise":false,"large":false}).appendPoint([12,13]).appendArc([11,12],{"radius":1,"clockwise":false,"large":false}).appendPoint([11,0]).appendArc([12,-1],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6,27],[6,27]]).appendArc([7,28],{"radius":1,"clockwise":false,"large":false}).appendPoint([7,40]).appendArc([6,41],{"radius":1,"clockwise":false,"large":false}).appendPoint([-6,41]).appendArc([-7,40],{"radius":1,"clockwise":false,"large":false}).appendPoint([-7,28]).appendArc([-6,27],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6,10],[6,10]]).appendArc([7,11],{"radius":1,"clockwise":false,"large":false}).appendPoint([7,23]).appendArc([6,24],{"radius":1,"clockwise":false,"large":false}).appendPoint([-6,24]).appendArc([-7,23],{"radius":1,"clockwise":false,"large":false}).appendPoint([-7,11]).appendArc([-6,10],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6,-7],[6,-7]]).appendArc([7,-6],{"radius":1,"clockwise":false,"large":false}).appendPoint([7,6]).appendArc([6,7],{"radius":1,"clockwise":false,"large":false}).appendPoint([-6,7]).appendArc([-7,6],{"radius":1,"clockwise":false,"large":false}).appendPoint([-7,-6]).appendArc([-6,-7],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[84.3178207,-23.9920013],[94.1476454,-30.8749186]]).appendArc([95.5403738,-30.629343],{"radius":1,"clockwise":false,"large":false}).appendPoint([102.4232911,-20.7995183]).appendArc([102.1777155,-19.4067899],{"radius":1,"clockwise":false,"large":false}).appendPoint([92.3478908,-12.5238726]).appendArc([90.9551624,-12.7694482],{"radius":1,"clockwise":false,"large":false}).appendPoint([84.0722451,-22.5992729]).appendArc([84.3178207,-23.9920013],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}


function topPlate3dUpper_extrude_0_8_outline_fn(){
    return new CSG.Path2D([[83,39],[83,-4.00591]]).appendArc([83.1028119,-4.0324165],{"radius":1,"clockwise":true,"large":false}).appendPoint([90.3996454,-6.3330993]).appendArc([90.672516,-6.4676642],{"radius":1,"clockwise":true,"large":false}).appendPoint([105,-16.4998765]).appendPoint([105,-14.6687146]).appendPoint([108.6089941,-17.1957595]).appendArc([109.2229331,-20.6775806],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([97.7655421,-37.0404307]).appendArc([94.2342908,-37.6188538],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([80.5068978,-27.5]).appendPoint([62,-27.5]).appendArc([59.5,-25],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([59.5,-6.5]).appendPoint([25.3078864,-6.5]).appendPoint([11.7795406,-12.2978625]).appendArc([10.7947424,-12.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-10,-12.5]).appendArc([-12.5,-10],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-12.5,44.2792408]).appendArc([-10.7905695,46.650949],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([6.3717083,52.3717083]).appendArc([7.1622777,52.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([82,52.5]).appendArc([84.5,50],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([84.5,39]).appendPoint([83,39]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[63,31.5],"radius":1})
.union(
    CAG.circle({"center":[85.5,-9],"radius":1})
).union(
    CAG.circle({"center":[13,-5.5],"radius":1})
).union(
    CAG.circle({"center":[6,45.5],"radius":1})
).union(
    new CSG.Path2D([[47.4,32.4],[60.6,32.4]]).appendArc([61.6,33.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([61.6,46.6]).appendArc([60.6,47.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([47.4,47.6]).appendArc([46.4,46.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([46.4,33.4]).appendArc([47.4,32.4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[29.4,32.4],[42.6,32.4]]).appendArc([43.6,33.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([43.6,46.6]).appendArc([42.6,47.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([29.4,47.6]).appendArc([28.4,46.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([28.4,33.4]).appendArc([29.4,32.4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[47.4,-1.6],[60.6,-1.6]]).appendArc([61.6,-0.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([61.6,12.6]).appendArc([60.6,13.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([47.4,13.6]).appendArc([46.4,12.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([46.4,-0.6]).appendArc([47.4,-1.6],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[29.4,-1.6],[42.6,-1.6]]).appendArc([43.6,-0.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([43.6,12.6]).appendArc([42.6,13.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([29.4,13.6]).appendArc([28.4,12.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([28.4,-0.6]).appendArc([29.4,-1.6],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[11.4,32.4],[24.6,32.4]]).appendArc([25.6,33.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([25.6,46.6]).appendArc([24.6,47.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([11.4,47.6]).appendArc([10.4,46.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([10.4,33.4]).appendArc([11.4,32.4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.6,26.4],[6.6,26.4]]).appendArc([7.6,27.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([7.6,40.6]).appendArc([6.6,41.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([-6.6,41.6]).appendArc([-7.6,40.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([-7.6,27.4]).appendArc([-6.6,26.4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.6,-7.6],[6.6,-7.6]]).appendArc([7.6,-6.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([7.6,6.6]).appendArc([6.6,7.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([-6.6,7.6]).appendArc([-7.6,6.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([-7.6,-6.6]).appendArc([-6.6,-7.6],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[65.4,32.4],[78.6,32.4]]).appendArc([79.6,33.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([79.6,46.6]).appendArc([78.6,47.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([65.4,47.6]).appendArc([64.4,46.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([64.4,33.4]).appendArc([65.4,32.4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[47.4,15.4],[60.6,15.4]]).appendArc([61.6,16.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([61.6,29.6]).appendArc([60.6,30.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([47.4,30.6]).appendArc([46.4,29.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([46.4,16.4]).appendArc([47.4,15.4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[29.4,15.4],[42.6,15.4]]).appendArc([43.6,16.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([43.6,29.6]).appendArc([42.6,30.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([29.4,30.6]).appendArc([28.4,29.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([28.4,16.4]).appendArc([29.4,15.4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.6,9.4],[6.6,9.4]]).appendArc([7.6,10.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([7.6,23.6]).appendArc([6.6,24.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([-6.6,24.6]).appendArc([-7.6,23.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([-7.6,10.4]).appendArc([-6.6,9.4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[65.4,-22.6],[78.6,-22.6]]).appendArc([79.6,-21.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([79.6,-8.4]).appendArc([78.6,-7.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([65.4,-7.4]).appendArc([64.4,-8.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([64.4,-21.6]).appendArc([65.4,-22.6],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[65.4,-1.6],[78.6,-1.6]]).appendArc([79.6,-0.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([79.6,12.6]).appendArc([78.6,13.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([65.4,13.6]).appendArc([64.4,12.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([64.4,-0.6]).appendArc([65.4,-1.6],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[11.4,15.4],[24.6,15.4]]).appendArc([25.6,16.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([25.6,29.6]).appendArc([24.6,30.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([11.4,30.6]).appendArc([10.4,29.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([10.4,16.4]).appendArc([11.4,15.4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[11.4,-1.6],[24.6,-1.6]]).appendArc([25.6,-0.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([25.6,12.6]).appendArc([24.6,13.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([11.4,13.6]).appendArc([10.4,12.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([10.4,-0.6]).appendArc([11.4,-1.6],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[65.4,15.4],[78.6,15.4]]).appendArc([79.6,16.4],{"radius":1,"clockwise":false,"large":false}).appendPoint([79.6,29.6]).appendArc([78.6,30.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([65.4,30.6]).appendArc([64.4,29.6],{"radius":1,"clockwise":false,"large":false}).appendPoint([64.4,16.4]).appendArc([65.4,15.4],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[83.4821836,-24.1393466],[94.2949907,-31.7105557]]).appendArc([95.6877191,-31.4649801],{"radius":1,"clockwise":false,"large":false}).appendPoint([103.2589282,-20.652173]).appendArc([103.0133526,-19.2594446],{"radius":1,"clockwise":false,"large":false}).appendPoint([92.2005455,-11.6882355]).appendArc([90.8078171,-11.9338111],{"radius":1,"clockwise":false,"large":false}).appendPoint([83.236608,-22.7466182]).appendArc([83.4821836,-24.1393466],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 0.8] });
}




                function topPlate_case_fn() {
                    

                // creating part 0 of case topPlate
                let topPlate__part_0 = topPlate3d_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let topPlate__part_0_bounds = topPlate__part_0.getBounds();
                let topPlate__part_0_x = topPlate__part_0_bounds[0].x + (topPlate__part_0_bounds[1].x - topPlate__part_0_bounds[0].x) / 2
                let topPlate__part_0_y = topPlate__part_0_bounds[0].y + (topPlate__part_0_bounds[1].y - topPlate__part_0_bounds[0].y) / 2
                topPlate__part_0 = translate([-topPlate__part_0_x, -topPlate__part_0_y, 0], topPlate__part_0);
                topPlate__part_0 = rotate([0,0,0], topPlate__part_0);
                topPlate__part_0 = translate([topPlate__part_0_x, topPlate__part_0_y, 0], topPlate__part_0);

                topPlate__part_0 = translate([0,0,0], topPlate__part_0);
                let result = topPlate__part_0;
                
            

                // creating part 1 of case topPlate
                let topPlate__part_1 = topPlate3dUpper_extrude_0_8_outline_fn();

                // make sure that rotations are relative
                let topPlate__part_1_bounds = topPlate__part_1.getBounds();
                let topPlate__part_1_x = topPlate__part_1_bounds[0].x + (topPlate__part_1_bounds[1].x - topPlate__part_1_bounds[0].x) / 2
                let topPlate__part_1_y = topPlate__part_1_bounds[0].y + (topPlate__part_1_bounds[1].y - topPlate__part_1_bounds[0].y) / 2
                topPlate__part_1 = translate([-topPlate__part_1_x, -topPlate__part_1_y, 0], topPlate__part_1);
                topPlate__part_1 = rotate([0,0,0], topPlate__part_1);
                topPlate__part_1 = translate([topPlate__part_1_x, topPlate__part_1_y, 0], topPlate__part_1);

                topPlate__part_1 = translate([0,0,1.2], topPlate__part_1);
                result = result.union(topPlate__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return topPlate_case_fn();
            }

        