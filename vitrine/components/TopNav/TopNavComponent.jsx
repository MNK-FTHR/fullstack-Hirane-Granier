import React from "react"
import {ButtonComponent} from "my-lib-ui";
import style from "./style.js"
console.log(style);
const TopNavComponent = () => {
    return (
        <div style={style.container}>
            <div style={style.gridObjects.logoImage}>
                <svg width="66" height="66" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H250V250H0V0ZM205.746 115.283C213.477 115.927 218.848 122.378 218.848 122.378L218.846 122.378C226.141 122.378 229.794 128.183 229.798 128.192V143.459C224.001 147.868 207.573 148.943 207.573 148.943C205.639 148.943 205.75 146.685 205.75 146.685C205.75 122.601 186.209 123.031 186.209 123.031C164.52 123.031 166.449 148.62 166.449 148.62C166.449 151.844 163.869 151.631 163.869 151.631H88.2764C85.0543 151.631 85.4816 148.835 85.4816 148.835V139.375C80.9728 122.812 67.227 123.028 67.227 123.028C43.8209 123.028 46.3959 148.833 46.3959 148.833L22.5577 143.455C19.7678 142.163 19.5529 140.446 19.5529 140.446V126.252C19.5529 121.954 27.4989 116.362 27.4989 116.362C71.5228 94.0002 101.376 92.0611 101.376 92.0611C123.924 89.9106 133.804 94.4256 133.804 94.4256L162.581 110.551C175.679 113.562 205.746 115.283 205.746 115.283ZM31.3136 117.754C31.3136 117.754 22.401 123.504 22.401 127.808H22.4013C22.4013 127.808 41.513 127.64 43.1818 117.754C43.1818 117.754 36.2474 115.957 31.3136 117.754ZM63.6868 109.042C63.6868 109.042 61.9676 111.3 73.7792 111.3V111.297H85.2299V100.427C76.1542 102.88 62.9808 106.849 63.6868 109.042ZM98.0484 123.732H103.202C104.181 123.732 104.975 123.241 104.975 122.642C104.975 122.042 104.18 121.555 103.202 121.555H98.0484C97.0673 121.555 96.2752 122.042 96.2752 122.642C96.2752 123.245 97.0709 123.732 98.0484 123.732ZM88.2974 99.6142V111.3L153.028 111.3L132.517 99.1519C132.517 99.1519 118.986 92.1642 93.5371 98.2924C93.5371 98.2924 91.4078 98.8039 88.2974 99.6142ZM204.643 117.858C209.595 117.194 216.864 123.78 216.864 123.78C205.681 125.374 204.643 117.858 204.643 117.858ZM66.2803 125.841C57.0049 125.841 49.4868 133.334 49.4868 142.605C49.4868 151.854 57.0036 159.365 66.2803 159.365C75.5507 159.365 83.0689 151.86 83.0689 142.605C83.0676 133.335 75.5507 125.836 66.2803 125.841ZM66.2779 145.27C64.7986 145.27 63.6072 144.076 63.6072 142.603C63.6072 141.128 64.7999 139.933 66.2779 139.933C67.7522 139.933 68.9437 141.126 68.9437 142.603C68.9437 144.071 67.7547 145.27 66.2779 145.27ZM68.8059 138.184C68.4339 137.971 68.0364 137.805 67.6108 137.689V133.987C69.0291 134.205 70.3278 134.748 71.4351 135.558L68.8059 138.184ZM64.9376 137.692C64.4912 137.814 64.0705 137.99 63.6803 138.22L61.0633 135.607C62.1803 134.772 63.4961 134.21 64.9388 133.987L64.9376 137.692ZM61.8193 140.131C61.6205 140.486 61.4645 140.866 61.3535 141.269H57.6534C57.8668 139.877 58.3961 138.597 59.1851 137.501L61.8193 140.131ZM61.3535 143.939C61.4681 144.36 61.6352 144.758 61.851 145.13L59.2243 147.751C58.4158 146.647 57.8694 145.353 57.6511 143.938L61.3535 143.939ZM63.74 147.015C64.1144 147.228 64.5119 147.396 64.9375 147.512V151.214C63.5192 150.996 62.2205 150.451 61.1132 149.638L63.74 147.015ZM67.6105 147.516C68.0142 147.406 68.3898 147.251 68.7471 147.053L71.3811 149.686C70.2861 150.476 69.0044 151.005 67.6105 151.218L67.6105 147.516ZM70.6653 145.192C70.8958 144.803 71.0739 144.384 71.1946 143.936H74.8968C74.6761 145.375 74.1127 146.689 73.2798 147.804L70.6653 145.192ZM71.1946 141.268C71.08 140.841 70.9104 140.441 70.697 140.069L73.3238 137.446C74.1348 138.554 74.6811 139.851 74.897 141.268L71.1946 141.268ZM169.291 142.605C169.291 133.334 176.81 125.841 186.084 125.841C195.356 125.836 202.873 133.335 202.873 142.605C202.873 151.86 195.354 159.365 186.084 159.365C176.809 159.365 169.291 151.854 169.291 142.605ZM183.411 142.603C183.411 144.076 184.602 145.27 186.082 145.27C187.559 145.27 188.749 144.071 188.748 142.603C188.748 141.126 187.556 139.933 186.082 139.933C184.601 139.933 183.411 141.128 183.411 142.603ZM187.415 137.689C187.84 137.805 188.238 137.971 188.61 138.184L191.237 135.558C190.132 134.748 188.833 134.205 187.415 133.987V137.689ZM183.484 138.22C183.874 137.99 184.292 137.814 184.741 137.692L184.742 133.987C183.302 134.21 181.984 134.772 180.866 135.607L183.484 138.22ZM181.158 141.269C181.269 140.866 181.425 140.486 181.624 140.131L178.989 137.501C178.202 138.597 177.673 139.877 177.457 141.269H181.158ZM181.654 145.13C181.438 144.758 181.274 144.36 181.159 143.939L177.456 143.938C177.672 145.353 178.218 146.647 179.03 147.751L181.654 145.13ZM184.742 147.512C184.317 147.396 183.919 147.228 183.545 147.015L180.918 149.638C182.025 150.451 183.324 150.996 184.742 151.214V147.512ZM188.551 147.053C188.194 147.251 187.818 147.406 187.415 147.516L187.415 151.218C188.809 151.005 190.093 150.476 191.186 149.686L188.551 147.053ZM191.002 143.936C190.879 144.384 190.701 144.803 190.47 145.192L193.085 147.804C193.918 146.689 194.482 145.375 194.702 143.936H191.002ZM190.504 140.069C190.718 140.441 190.885 140.841 191.002 141.268L194.702 141.268C194.486 139.851 193.94 138.554 193.129 137.446L190.504 140.069Z" fill="black"/>
                </svg>
            </div>
            <div style={style.gridObjects.title}>
                <h2 style={style.title}>Ride</h2>
            </div>
            <div style={style.gridObjects.connexion}>
                <ButtonComponent color="danger" text="Connexion admin" />
            </div>
        </div>
    );
};

export default TopNavComponent;