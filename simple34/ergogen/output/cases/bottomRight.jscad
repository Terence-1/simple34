function bottomPlateNonSlip_extrude_1_outline_fn(){
    return new CSG.Path2D([[-12.5,-10],[-12.5,44.2792408]]).appendArc([-10.7905695,46.650949],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([6.3717083,52.3717083]).appendArc([7.1622777,52.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([82,52.5]).appendArc([84.5,50],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([84.5,40.5]).appendPoint([104,40.5]).appendArc([106.5,38],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([106.5,-15.7190258]).appendPoint([108.6089941,-17.1957594]).appendArc([109.2229331,-20.6775806],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([97.7655421,-37.0404307]).appendArc([94.2342908,-37.6188538],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([80.5068978,-27.5]).appendPoint([62,-27.5]).appendArc([59.5,-25],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([59.5,-6.5]).appendPoint([25.3078864,-6.5]).appendPoint([11.7795406,-12.2978625]).appendArc([10.7947424,-12.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-10,-12.5]).appendArc([-12.5,-10],{"radius":2.5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[100.8,34.5],"radius":3})
.union(
    CAG.circle({"center":[95.2535856,-31.0389189],"radius":3})
).union(
    CAG.circle({"center":[65,-21.5],"radius":3})
).union(
    CAG.circle({"center":[-7,-6.5],"radius":3})
).union(
    CAG.circle({"center":[-7,40.5],"radius":3})
).union(
    CAG.circle({"center":[79,46.5],"radius":3})
)).extrude({ offset: [0, 0, 1] });
}


function brassInsertsPlate_extrude_1_outline_fn(){
    return new CSG.Path2D([[-12.5,-10],[-12.5,44.2792408]]).appendArc([-10.7905695,46.650949],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([6.3717083,52.3717083]).appendArc([7.1622777,52.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([82,52.5]).appendArc([84.5,50],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([84.5,40.5]).appendPoint([104,40.5]).appendArc([106.5,38],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([106.5,-15.7190258]).appendPoint([108.6089941,-17.1957594]).appendArc([109.2229331,-20.6775806],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([97.7655421,-37.0404307]).appendArc([94.2342908,-37.6188538],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([80.5068978,-27.5]).appendPoint([62,-27.5]).appendArc([59.5,-25],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([59.5,-6.5]).appendPoint([25.3078864,-6.5]).appendPoint([11.7795406,-12.2978625]).appendArc([10.7947424,-12.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-10,-12.5]).appendArc([-12.5,-10],{"radius":2.5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[63,31.5],"radius":0.8})
.union(
    CAG.circle({"center":[85.5,-9],"radius":0.8})
).union(
    CAG.circle({"center":[13,-5.5],"radius":0.8})
).union(
    CAG.circle({"center":[6,45.5],"radius":0.8})
)).extrude({ offset: [0, 0, 1] });
}


function brassInsertsPos_extrude_1_45_outline_fn(){
    return CAG.circle({"center":[63,31.5],"radius":1.5})
.subtract(
    CAG.circle({"center":[63,31.5],"radius":0.8})
).union(
    CAG.circle({"center":[85.5,-9],"radius":1.5})
.subtract(
    CAG.circle({"center":[85.5,-9],"radius":0.8})
)).union(
    CAG.circle({"center":[13,-5.5],"radius":1.5})
.subtract(
    CAG.circle({"center":[13,-5.5],"radius":0.8})
)).union(
    CAG.circle({"center":[6,45.5],"radius":1.5})
.subtract(
    CAG.circle({"center":[6,45.5],"radius":0.8})
)).extrude({ offset: [0, 0, 1.45] });
}


function bottomPlateEdgeLower_extrude_3_45_outline_fn(){
    return new CSG.Path2D([[-12.5,-10],[-12.5,44.2792408]]).appendArc([-10.7905695,46.650949],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([6.3717083,52.3717083]).appendArc([7.1622777,52.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([82,52.5]).appendArc([84.5,50],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([84.5,40.5]).appendPoint([104,40.5]).appendArc([106.5,38],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([106.5,-15.7190258]).appendPoint([108.6089941,-17.1957594]).appendArc([109.2229331,-20.6775806],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([97.7655421,-37.0404307]).appendArc([94.2342908,-37.6188538],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([80.5068978,-27.5]).appendPoint([62,-27.5]).appendArc([59.5,-25],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([59.5,-6.5]).appendPoint([25.3078864,-6.5]).appendPoint([11.7795406,-12.2978625]).appendArc([10.7947424,-12.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-10,-12.5]).appendArc([-12.5,-10],{"radius":2.5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[-11,-10],[-11,44.2792408]]).appendArc([-10.3162278,45.2279241],{"radius":1,"clockwise":true,"large":false}).appendPoint([6.8460499,50.9486833]).appendArc([7.1622777,51],{"radius":1,"clockwise":true,"large":false}).appendPoint([82,51]).appendArc([83,50],{"radius":1,"clockwise":true,"large":false}).appendPoint([83,40]).appendArc([84,39],{"radius":1,"clockwise":false,"large":false}).appendPoint([104,39]).appendArc([105,38],{"radius":1,"clockwise":true,"large":false}).appendPoint([105,-15.9793095]).appendArc([105.4264236,-16.7984615],{"radius":1,"clockwise":false,"large":false}).appendPoint([107.7486294,-18.4244875]).appendArc([107.994205,-19.8172159],{"radius":1,"clockwise":true,"large":false}).appendPoint([96.536814,-36.180066]).appendArc([95.1243135,-36.4114353],{"radius":1,"clockwise":true,"large":false}).appendPoint([81.2646137,-26.1950543]).appendArc([80.6712652,-26],{"radius":1,"clockwise":false,"large":false}).appendPoint([62,-26]).appendArc([61,-25],{"radius":1,"clockwise":true,"large":false}).appendPoint([61,-6]).appendArc([60,-5],{"radius":1,"clockwise":false,"large":false}).appendPoint([25.2052576,-5]).appendArc([24.8113383,-5.080855],{"radius":1,"clockwise":false,"large":false}).appendPoint([11.1886617,-10.919145]).appendArc([10.7947424,-11],{"radius":1,"clockwise":true,"large":false}).appendPoint([-10,-11]).appendArc([-11,-10],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 3.45] });
}


function bottomPlateEdgeUpper_extrude_1_1_outline_fn(){
    return new CSG.Path2D([[-12.5,-10],[-12.5,44.2792408]]).appendArc([-10.7905695,46.650949],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([6.3717083,52.3717083]).appendArc([7.1622777,52.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([82,52.5]).appendArc([84.5,50],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([84.5,39]).appendPoint([84,39]).appendArc([83,40],{"radius":1,"clockwise":true,"large":false}).appendPoint([83,50]).appendArc([82,51],{"radius":1,"clockwise":false,"large":false}).appendPoint([7.1622777,51]).appendArc([6.8460499,50.9486833],{"radius":1,"clockwise":false,"large":false}).appendPoint([-10.3162278,45.2279241]).appendArc([-11,44.2792408],{"radius":1,"clockwise":false,"large":false}).appendPoint([-11,-10]).appendArc([-10,-11],{"radius":1,"clockwise":false,"large":false}).appendPoint([10.7947424,-11]).appendArc([11.1886617,-10.919145],{"radius":1,"clockwise":false,"large":false}).appendPoint([24.8113383,-5.080855]).appendArc([25.2052576,-5],{"radius":1,"clockwise":true,"large":false}).appendPoint([60,-5]).appendArc([61,-6],{"radius":1,"clockwise":true,"large":false}).appendPoint([61,-25]).appendArc([62,-26],{"radius":1,"clockwise":false,"large":false}).appendPoint([80.6712652,-26]).appendArc([81.2646137,-26.1950543],{"radius":1,"clockwise":true,"large":false}).appendPoint([95.1243135,-36.4114353]).appendArc([96.536814,-36.180066],{"radius":1,"clockwise":false,"large":false}).appendPoint([107.994205,-19.8172159]).appendArc([107.7486294,-18.4244875],{"radius":1,"clockwise":false,"large":false}).appendPoint([105.4264236,-16.7984615]).appendArc([105,-15.9793095],{"radius":1,"clockwise":true,"large":false}).appendPoint([105,-14.6687146]).appendPoint([108.6089941,-17.1957595]).appendArc([109.2229331,-20.6775806],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([97.7655421,-37.0404307]).appendArc([94.2342908,-37.6188538],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([80.5068978,-27.5]).appendPoint([62,-27.5]).appendArc([59.5,-25],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([59.5,-6.5]).appendPoint([25.3078864,-6.5]).appendPoint([11.7795406,-12.2978625]).appendArc([10.7947424,-12.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-10,-12.5]).appendArc([-12.5,-10],{"radius":2.5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.1] });
}




                function bottomRight_case_fn() {
                    

                // creating part 0 of case bottomRight
                let bottomRight__part_0 = bottomPlateNonSlip_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottomRight__part_0_bounds = bottomRight__part_0.getBounds();
                let bottomRight__part_0_x = bottomRight__part_0_bounds[0].x + (bottomRight__part_0_bounds[1].x - bottomRight__part_0_bounds[0].x) / 2
                let bottomRight__part_0_y = bottomRight__part_0_bounds[0].y + (bottomRight__part_0_bounds[1].y - bottomRight__part_0_bounds[0].y) / 2
                bottomRight__part_0 = translate([-bottomRight__part_0_x, -bottomRight__part_0_y, 0], bottomRight__part_0);
                bottomRight__part_0 = rotate([0,0,0], bottomRight__part_0);
                bottomRight__part_0 = translate([bottomRight__part_0_x, bottomRight__part_0_y, 0], bottomRight__part_0);

                bottomRight__part_0 = translate([0,0,-1], bottomRight__part_0);
                let result = bottomRight__part_0;
                
            

                // creating part 1 of case bottomRight
                let bottomRight__part_1 = brassInsertsPlate_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottomRight__part_1_bounds = bottomRight__part_1.getBounds();
                let bottomRight__part_1_x = bottomRight__part_1_bounds[0].x + (bottomRight__part_1_bounds[1].x - bottomRight__part_1_bounds[0].x) / 2
                let bottomRight__part_1_y = bottomRight__part_1_bounds[0].y + (bottomRight__part_1_bounds[1].y - bottomRight__part_1_bounds[0].y) / 2
                bottomRight__part_1 = translate([-bottomRight__part_1_x, -bottomRight__part_1_y, 0], bottomRight__part_1);
                bottomRight__part_1 = rotate([0,0,0], bottomRight__part_1);
                bottomRight__part_1 = translate([bottomRight__part_1_x, bottomRight__part_1_y, 0], bottomRight__part_1);

                bottomRight__part_1 = translate([0,0,-2], bottomRight__part_1);
                result = result.union(bottomRight__part_1);
                
            

                // creating part 2 of case bottomRight
                let bottomRight__part_2 = brassInsertsPos_extrude_1_45_outline_fn();

                // make sure that rotations are relative
                let bottomRight__part_2_bounds = bottomRight__part_2.getBounds();
                let bottomRight__part_2_x = bottomRight__part_2_bounds[0].x + (bottomRight__part_2_bounds[1].x - bottomRight__part_2_bounds[0].x) / 2
                let bottomRight__part_2_y = bottomRight__part_2_bounds[0].y + (bottomRight__part_2_bounds[1].y - bottomRight__part_2_bounds[0].y) / 2
                bottomRight__part_2 = translate([-bottomRight__part_2_x, -bottomRight__part_2_y, 0], bottomRight__part_2);
                bottomRight__part_2 = rotate([0,0,0], bottomRight__part_2);
                bottomRight__part_2 = translate([bottomRight__part_2_x, bottomRight__part_2_y, 0], bottomRight__part_2);

                bottomRight__part_2 = translate([0,0,-3.45], bottomRight__part_2);
                result = result.union(bottomRight__part_2);
                
            

                // creating part 3 of case bottomRight
                let bottomRight__part_3 = bottomPlateEdgeLower_extrude_3_45_outline_fn();

                // make sure that rotations are relative
                let bottomRight__part_3_bounds = bottomRight__part_3.getBounds();
                let bottomRight__part_3_x = bottomRight__part_3_bounds[0].x + (bottomRight__part_3_bounds[1].x - bottomRight__part_3_bounds[0].x) / 2
                let bottomRight__part_3_y = bottomRight__part_3_bounds[0].y + (bottomRight__part_3_bounds[1].y - bottomRight__part_3_bounds[0].y) / 2
                bottomRight__part_3 = translate([-bottomRight__part_3_x, -bottomRight__part_3_y, 0], bottomRight__part_3);
                bottomRight__part_3 = rotate([0,0,0], bottomRight__part_3);
                bottomRight__part_3 = translate([bottomRight__part_3_x, bottomRight__part_3_y, 0], bottomRight__part_3);

                bottomRight__part_3 = translate([0,0,-5.45], bottomRight__part_3);
                result = result.union(bottomRight__part_3);
                
            

                // creating part 4 of case bottomRight
                let bottomRight__part_4 = bottomPlateEdgeUpper_extrude_1_1_outline_fn();

                // make sure that rotations are relative
                let bottomRight__part_4_bounds = bottomRight__part_4.getBounds();
                let bottomRight__part_4_x = bottomRight__part_4_bounds[0].x + (bottomRight__part_4_bounds[1].x - bottomRight__part_4_bounds[0].x) / 2
                let bottomRight__part_4_y = bottomRight__part_4_bounds[0].y + (bottomRight__part_4_bounds[1].y - bottomRight__part_4_bounds[0].y) / 2
                bottomRight__part_4 = translate([-bottomRight__part_4_x, -bottomRight__part_4_y, 0], bottomRight__part_4);
                bottomRight__part_4 = rotate([0,0,0], bottomRight__part_4);
                bottomRight__part_4 = translate([bottomRight__part_4_x, bottomRight__part_4_y, 0], bottomRight__part_4);

                bottomRight__part_4 = translate([0,0,-6.45], bottomRight__part_4);
                result = result.union(bottomRight__part_4);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottomRight_case_fn();
            }

        